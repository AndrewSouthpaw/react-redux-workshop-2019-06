import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from './actions'
import { Todo } from './lib/Todo'
import { getTodos } from './selectors'

export class _App extends React.Component {
  state = {
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todo } = this.state
    this.props.dispatch(addTodo(todo))
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  handleTodoCheck = (id) => { this.props.dispatch(toggleTodo(id)) }

  render() {
    const { todos } = this.props
    const { todo } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul data-test-id="todos">
          {todos.map((todo) => (
            <Todo {...todo} key={todo.id} onChange={() => { this.handleTodoCheck(todo.id) }} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getTodos(state.todos),
})

export const App = connect(mapStateToProps)(_App)
