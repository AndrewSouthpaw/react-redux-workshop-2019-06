import React from 'react'
import './App.scss'

export class App extends React.Component {
  state = {
    todos: [],
  }

  render() {
    const { todos } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        <form>
          <input type="text" placeholder="Add a todo" />
        </form>
      </div>
    )
  }
}
