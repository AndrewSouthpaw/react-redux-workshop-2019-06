import React from 'react'
import './App.scss'

const OpacityModulator = (id) => ({
  id,
  opacity: 0,
  controlled: false,
  setOpacity(opacity) {
    this.opacity = opacity
    document.getElementById(this.id).style.opacity = opacity
  },
  startControlling() {
    this.controlled = true
    document.getElementById(this.id).getElementsByTagName('p')[0].textContent = 'Controlling'
  },
  stopControlling() {
    this.controlled = false
    document.getElementById(this.id).getElementsByTagName('p')[0].textContent = 'Not controlling'
  },
})

export class App extends React.Component {
  constructor(props) {
    super(props)
    this.modulator = OpacityModulator('box1')
  }

  setOpacity = (event) => {
    const { clientY } = event
    const { top, bottom } = event.currentTarget.getBoundingClientRect()
    const opacity = 1 - (clientY - top) / (bottom - top)
    this.modulator.setOpacity(opacity)
  }

  startControlling = (e) => {
    this.setOpacity(e)
    this.modulator.startControlling()
  }

  stopControlling = () => {
    this.modulator.setOpacity(1)
    this.modulator.stopControlling()
  }

  render() {
    console.log('this.modulator.controlled', this.modulator.controlled)
    return (
      <div className="App">
        <header className="App-header">
          <div
            onMouseEnter={this.startControlling}
            onMouseMove={this.setOpacity}
            onMouseLeave={this.stopControlling}
          >
            <div id="box1" className="opacity-box">
              <p>Not controlling</p>
            </div>
          </div>
        </header>
      </div>
    )
  }
}
