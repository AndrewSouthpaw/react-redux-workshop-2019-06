import React from 'react'
import './App.scss'
import prettyMs from 'pretty-ms'

export class Timer extends React.Component {
  state = {
    startTime: Date.now(),
    timeInMs: 0,
  }

  componentDidMount() {
    this._interval = setInterval(this.updateTime.bind(this), 1)
  }

  componentWillMount() {
    clearInterval(this._interval)
  }

  updateTime = () => {
    this.setState({ timeInMs: Date.now() - this.state.startTime })
  }

  render() {
    return (
      <div>
        <h1>Timer 1</h1>
        <span>{prettyMs(this.state.timeInMs)}</span>
      </div>
    )
  }
}

export class CountdownTimer extends React.Component {
  state = {
    startTime: Date.now(),
    timeInMs: 0,
  }

  componentDidMount() {
    this._interval = setInterval(this.updateTime.bind(this), 1)
  }

  componentWillMount() {
    clearInterval(this._interval)
  }

  updateTime = () => {
    this.setState({ timeInMs: Date.now() - this.state.startTime })
  }

  render() {
    const ms = Math.max(this.props.countdownMin * 60 * 1000 - this.state.timeInMs, 0)
    return (
      <div>
        <h1>Timer 2</h1>
        <span>{prettyMs(ms)}</span>
      </div>
    )
  }
}

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Timer />
        <CountdownTimer countdownMin={1} />
      </div>
    )
  }
}
