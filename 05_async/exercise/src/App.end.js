import React from 'react'
import './App.scss'
import { fakeGetTodos, fakeSaveTodoToServer } from './lib/helpers'
import { inc, last } from 'ramda'

class Todo extends React.Component {
  render() {
    return (<div className="form-group">{this.props.name}</div>)
  }
}

export class App extends React.Component {
  state = {
    todos: [],
    todo: '',
  }

  async componentDidMount() {
    const data = (await fakeGetTodos()).data
    this.setState({ todos: data })
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = async (e) => {
    e.preventDefault()
    const { todos, todo } = this.state
    this.setState({ saving: true })
    await fakeSaveTodoToServer(todo)
    this.setState({ todos: [...todos, { id: inc(last(todos).id), name: todo }], saving: false })
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
