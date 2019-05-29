import React from 'react'
import './App.scss'
import { inc, last, propOr } from 'ramda'
import { Todo } from './lib/todo'

export class App extends React.Component {
  state = {
    todos: [],
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = async (e) => {
    e.preventDefault()
    const { todos, todo } = this.state
    this.setState({ saving: true })
    this.setState({ todos: [...todos, { id: inc(propOr(0, 'id', last(todos))), name: todo }], saving: false })
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  render() {
    const { todos, todo, saving } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo} ref={this.form}>
          <input
            type="text"
            placeholder="Add a todo"
            name="todo"
            value={todo}
            onChange={this.handleChange}
            disabled={saving}
          />
          <button type="submit">{saving ? 'Saving...' : 'Add Todo'}</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo {...todo} key={todo.id} />
          ))}
        </ul>
      </div>
    )
  }
}
