import React from 'react'
import './App.scss'

export class App extends React.Component {
  state = {
    count: 0,
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times`
  }

  componentDidUpdate() {
    document.title = `You clicked ${this.state.count} times`
  }

  render() {
    return (
      <div className="App">
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me
        </button>
      </div>
    )
  }
}
