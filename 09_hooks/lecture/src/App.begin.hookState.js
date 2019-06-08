import React from 'react'
import './App.scss'

export class PickableCages extends React.Component {
  state = {
    cageChoices: {},
  }

  static cages = [
    { id: 1, url: 'https://www.placecage.com/200/301' },
    { id: 2, url: 'https://www.placecage.com/200/302' },
    { id: 3, url: 'https://www.placecage.com/200/303' },
    { id: 4, url: 'https://www.placecage.com/200/304' },
  ]

  toggleCage = (id) => {
    const cageChoices = { ...this.state.cageChoices, [id]: !this.state.cageChoices[id] }
    this.setState({ cageChoices })
  }

  render() {
    const { cageChoices } = this.state
    return PickableCages.cages.map((cage) => (
      <div className="cage-display" key={cage.id}>
        <div className="cage-img" onClick={() => { this.toggleCage(cage.id) }} data-test-id="dt-cage">
          <img src={cage.url} alt="A beautiful cage" />
          {cageChoices[cage.id] && (
            <div className="overlay overlay-yes" data-test-id="dt-overlay" />
          )}
        </div>
      </div>
    ))
  }
}

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PickableCages />
      </div>
    )
  }
}
