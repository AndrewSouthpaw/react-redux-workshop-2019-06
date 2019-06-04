import React from 'react'
import './App.scss'
import { Todo } from './lib/todo'
import shortid from 'shortid'
import { append, assoc, assocPath, flip, pipe, prop } from 'ramda'

const lookup = flip(prop)

const addTodo = (todo, state) => {
  const newTodo = { id: shortid.generate(), name: todo }
  return pipe(
    assocPath(['todosById', newTodo.id], newTodo),
    assoc('ids', append(newTodo.id, state.ids)),
  )(state)
}

const getTodos = (state) => {
  const { ids, todosById } = state
  return ids.map(lookup(todosById))
}

export class App extends React.Component {
  state = {
    ids: [],
    todosById: {},
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    this.setState(addTodo(this.state.todo, this.state))
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  render() {
    const { ids, todo } = this.state
    return (
      <div className="App">
        <h1>My Todos ({ids.length})</h1>
        <form onSubmit={this.addTodo} ref={this.form}>
          <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
        </form>
        <ul>
          {getTodos(this.state).map((todo) => (
            <Todo {...todo} key={todo.id} onChange={() => { throw new Error('implement me!') }} />
          ))}
        </ul>
      </div>
    )
  }
}
