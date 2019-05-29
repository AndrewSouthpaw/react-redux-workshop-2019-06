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
  }

  form = React.createRef()

  resetFom() { this.form.current.reset() }

  addTodo = (e) => {
    e.preventDefault()
    const { todos } = this.state
    const data = new FormData(e.target)
    this.setState({ todos: [...todos, { id: counter++, name: data.get('todo') }] })
    this.resetFom()
  }

  prependTodo = () => {
    const { todos } = this.state
    const data = new FormData(this.form.current)
    this.setState({ todos: [{ id: counter++, name: data.get('todo') }, ...todos] })
    this.resetFom()
  }

  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo} ref={this.form}>
          <input type="text" placeholder="Add a todo" name="todo" />
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
