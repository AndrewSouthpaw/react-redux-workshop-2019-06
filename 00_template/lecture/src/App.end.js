import React from 'react'
import './App.scss'

const OpacityBox = ({ opacity, controlled }) => (
  <div id="box1" className="opacity-box" style={{ opacity }}>
    <p>{controlled ? 'Controlling' : 'Not controlled'}</p>
  </div>
)

export class App extends React.Component {
  state = {}

  componentDidMount() {
    this.stopControlling()
  }

  setOpacity = (event) => {
    const { clientY } = event
    const { top, bottom } = event.currentTarget.getBoundingClientRect()
    const opacity = 1 - (clientY - top) / (bottom - top)
    this.setState({ opacity })
  }

  startControlling = (e) => {
    this.setOpacity(e)
    this.setState({ controlled: true })
  }

  stopControlling = () => {
    this.setState({ opacity: 1, controlled: false })
  }

  render() {
    const { opacity, controlled } = this.state
    return (
      <div className="App">
        <header className="App-header">
          <div
            onMouseEnter={this.startControlling}
            onMouseMove={this.setOpacity}
            onMouseLeave={this.stopControlling}
          >
            <OpacityBox opacity={opacity} controlled={controlled} />
          </div>
        </header>
      </div>
    )
  }
}
