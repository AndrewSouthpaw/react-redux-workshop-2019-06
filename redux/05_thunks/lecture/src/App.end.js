import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addAndSaveTodoAsync, toggleTodo } from './actions'

class Todo extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input type="checkbox" onChange={this.props.onChange} checked={this.props.completed} />
        <span style={this.props.completed ? { textDecoration: 'line-through' } : {}}>
          {this.props.text}
        </span>
      </div>
    )
  }
}

export class _App extends React.Component {
  state = {
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = async (e) => {
    e.preventDefault()
    const { todo } = this.state
    try {
      await this.props.dispatch(addAndSaveTodoAsync(todo))
      this.resetFom()
    } catch (e) {
      console.log('e', e)
      this.setState({ error: e })
    }
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  handleTodoCheck = (i) => { this.props.dispatch(toggleTodo(i)) }

  render() {
    const { todos } = this.props
    const { error, todo } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
          {error && (<div>{error}</div>)}
        </form>
        <ul>
          {todos.map((todo, i) => (
            <Todo {...todo} key={todo.id} onChange={() => { this.handleTodoCheck(i) }} />
          ))}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
})

export const App = connect(mapStateToProps)(_App)
