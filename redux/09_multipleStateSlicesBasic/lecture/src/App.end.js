import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addTodo, decrementMaxTodos, incrementMaxTodos, toggleTodo } from './actions.end'
import { Todo } from './lib/Todo'
import { getTodos } from './selectors'

export const _Preferences = ({ dispatch, maxTodos }) => (
  <div className="Preferences">
    <h3>Preferences</h3>
    <p>
      <button onClick={() => { dispatch(decrementMaxTodos()) }}>-</button>
      {' '}Max Todos: {maxTodos}{' '}
      <button onClick={() => { dispatch(incrementMaxTodos()) }}>+</button>
    </p>
  </div>
)

const preferencesMapStateToProps = (state, ownProps) => ({
  ...state.preferences,
})
export const Preferences = connect(preferencesMapStateToProps)(_Preferences)

export class _App extends React.Component {
  state = {
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todo } = this.state
    try {
      this.setState({ error: '' })
      this.props.dispatch(addTodo(todo))
      this.resetFom()
    } catch (e) {
      this.setState({ error: e.message })
    }
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  handleTodoCheck = (id) => {
    this.setState({ error: '' })
    this.props.dispatch(toggleTodo(id))
  }

  render() {
    const { todos } = this.props
    const { todo, error } = this.state
    return (
      <div className="App">
        <Preferences />
        <div>
          <h1>My Todos ({todos.length})</h1>
          <form onSubmit={this.addTodo}>
            <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
            <button type="submit">Add Todo</button>
            {error && (<p>Error: {error}</p>)}
          </form>
          <ul data-test-id="todos">
            {todos.map((todo) => (
              <Todo {...todo} key={todo.id} onChange={() => { this.handleTodoCheck(todo.id) }} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getTodos(state.todos),
})

export const App = connect(mapStateToProps)(_App)
