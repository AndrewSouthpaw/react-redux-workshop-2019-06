import React from 'react'
import './App.scss'
import { Todo } from './lib/todo'
import { getTodos, addTodoToState } from './stateReducer'

export class App extends React.Component {
  state = {
    todosById: {
      1: { id: 1, list: 'react', name: 'Get Started' },
      2: { id: 2, list: 'react', name: 'React is cool' },
      3: { id: 3, list: 'react', name: 'React is fun' },
      4: { id: 4, list: 'redux', name: 'Redux is cool' },
      5: { id: 5, list: 'redux', name: 'So is FP' },
    },
    ids: [1, 2, 3, 4, 5],
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todo } = this.state
    this.setState({ todo: '', ...addTodoToState(todo, this.state) })
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  render() {
    const { todo } = this.state
    const todos = getTodos(this.state)
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo} ref={this.form}>
          <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
          <button type="submit">Add Todo</button>
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
