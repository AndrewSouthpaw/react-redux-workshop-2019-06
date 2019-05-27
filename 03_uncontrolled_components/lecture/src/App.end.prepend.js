import React from 'react'
import './App.scss'

class Todo extends React.Component {
  render() {
    return (
      <div className="form-group">
        {this.props.name}

        <input type='text' className='form-control' />

      </div>
    )
  }
}

let counter = 1

export class App extends React.Component {
  state = {
    todo: '',
    todos: [],
  }

  addTodo = (e) => {
    e.preventDefault()
    const { todo, todos } = this.state
    this.setState({ todo: '', todos: [...todos, { id: counter++, name: todo }] })
  }

  prependTodo = () => {
    const { todo, todos } = this.state
    this.setState({ todo: '', todos: [{ id: counter++, name: todo }, ...todos] })
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
          <button type="button" onClick={this.prependTodo}>Prepend</button>
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
