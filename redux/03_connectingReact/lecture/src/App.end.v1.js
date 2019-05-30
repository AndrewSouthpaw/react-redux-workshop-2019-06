import React from 'react'
import './App.scss'
import { store } from './index'

class Todo extends React.Component {
  render() {
    return (<div className="form-group">{this.props.text}</div>)
  }
}

export class App extends React.Component {
  state = {
    todos: store.getState().todos,
    todo: ''
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todo } = this.state
    store.dispatch({ type: 'ADD_TODO', text: todo })
    const { todos } = store.getState()
    this.setState({ todos })
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  render() {
    const { todos, todo } = this.state
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
