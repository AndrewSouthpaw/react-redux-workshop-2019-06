import React from 'react'
import './App.scss'
import { Todo } from './lib/todo'
import shortid from 'shortid'
import { assocPath, dissocPath, values } from 'ramda'

const addTodo = (todo, state) => {
  const newTodo = { id: shortid.generate(), name: todo }
  return assocPath(['todosById', newTodo.id], newTodo, state)
}

const completeTodo = (id, state) => dissocPath(['todosById', id], state)

const getTodos = (state) => values(state.todosById)

export class App extends React.Component {
  state = {
    todosById: {},
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    this.setState(addTodo(this.state.todo, this.state))
    this.resetFom()
  }

  completeTodo = (id) => {
    this.setState(completeTodo(id, this.state))
  }

  handleChange = (e) => { this.setState({ todo: e }) }

  render() {
    const { todo } = this.state
    const todos = getTodos(this.state)
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form>
          <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {todos.map((todo) => (
            <Todo {...todo} key={todo.id} onChange={() => { this.completeTodo(todo.id) }} />
          ))}
        </ul>
      </div>
    )
  }
}
