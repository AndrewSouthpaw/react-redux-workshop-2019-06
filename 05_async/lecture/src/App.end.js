import React from 'react'
import axios from 'axios'
import './App.scss'
import { sleep } from './lib/helpers'

export class App extends React.Component {
  state = {
    data: [],
    loading: true,
  }

  async componentDidMount() {
    // simulate lag...
    await sleep(1000)
    const data = (await axios.get('https://jsonplaceholder.typicode.com/todos')).data
    this.setState({ data, loading: false })
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
    const { loading } = this.state
    return (
      <div>
        <h2>Todos</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          this.renderList()
        )}
      </div>
    )
  }
}
