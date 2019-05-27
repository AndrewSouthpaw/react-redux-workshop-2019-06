import React from 'react'
import './App.scss'

export class App extends React.Component {
  state = {
    todo: '',
    todos: [],
  }

  addTodo = (e) => {
    e.preventDefault()
    const { todo, todos } = this.state
    this.setState({ todo: '', todos: [...todos, todo] })
  }

  handleChange = (e) => {
    this.setState({ todo: e.target.value })
  }

  render() {
    const { todos, todo } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo}>
          <input type="text" placeholder="Add a todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo}</li>
          ))}
        </ul>
      </div>
    )
  }
}
