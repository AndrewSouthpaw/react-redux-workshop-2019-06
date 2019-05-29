import React from 'react'
import './App.scss'

class Todo extends React.Component {
  render() {
    return (
      <div className="form-group">
        {this.props.name}
        <input type="text" />
      </div>
    )
  }
}

let counter = 1

export class App extends React.Component {
  state = {
    todos: [],
    todo: ''
  }

  form = React.createRef()

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todos, todo } = this.state
    this.setState({ todos: [...todos, { id: counter++, name: todo }] })
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  render() {
    const { todos, todo } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo} ref={this.form}>
          <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo, i) => (
            <Todo {...todo} key={todo.id} />
          ))}
        </ul>
      </div>
    )
  }
}
