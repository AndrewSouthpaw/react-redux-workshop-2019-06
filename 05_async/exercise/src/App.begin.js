import React from 'react'
import './App.scss'
import { fakeGetTodos, fakeSaveTodoToServer } from './lib/helpers'

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

  // todo: load data from server using `fakeGetTodos`

  resetFom() { this.setState({ todo: '' }) }

  addTodo = async (e) => {
    /**
     * - prevent regular form submission
     * - have input and button be disabled while saving
     * - update button text to say "Saving..." while it's saving
     * - wait for server to save using `fakeSaveTodoToServer`
     * - add new entry to the list
     */
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  render() {
    const { todos, todo, saving } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form onSubmit={this.addTodo}>
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
