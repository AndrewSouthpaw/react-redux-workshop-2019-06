import React from 'react'
import './App.scss'

export class App extends React.Component {
  state = {
    data: [
      { id: 1, title: 'Learn about fetching data' },
      { id: 2, title: 'Discover async' },
      { id: 3, title: '???' },
      { id: 4, title: 'Profit' },
    ],
  }

  renderList() {
    const { data } = this.state
    return (
      <ul>
        {data.map(todo => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div>
        <h2>Todos</h2>
        {this.renderList()}
      </div>
    )
  }
}
