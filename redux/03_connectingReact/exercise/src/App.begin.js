import React from 'react'
import './App.scss'

/**
 * Goal:
 * - Add checkbox next to todo item
 * - When todo item is checked, use redux to update state
 * - Refactor out action objects
 * - Try using mapDispatchToProps pattern
 * - Try using mapDispatchToProps pattern with object shorthand
 */

class Todo extends React.Component {
  render() {
    return (<div className="form-group">{this.props.text}</div>)
  }
}

export class App extends React.Component {
  state = {
    todo: '',
    todos: []
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todo } = this.state
    // tell store to add todo
    this.resetFom()
  }

  handleTodoCheck = (id) => {
    throw new Error('implement me')
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  render() {
    const { todo, todos } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo {...todo} key={todo.id} onChange={() => { this.handleTodoCheck(todo.id) }} />
          ))}
        </ul>
      </div>
    )
  }
}
