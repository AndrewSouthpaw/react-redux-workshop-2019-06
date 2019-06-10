import React from 'react'
import './App.scss'
import $ from 'jquery'

export class App extends React.Component {
  handleClick = () => {
    $('#clicked-counter').text(parseInt($('#clicked-counter').text()) + 1)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button onClick={this.handleClick}>Click me</button>
          <p>You've clicked me <span id="clicked-counter">0</span> times</p>
        </header>
      </div>
    )
  }
}
