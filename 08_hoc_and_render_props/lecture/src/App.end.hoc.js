import React from 'react'
import './App.scss'

const withPickable = (Comp) => (
  class Pickable extends React.Component {
    state = { choices: {} }

    handleChoice = (id) => {
      const choices = { ...this.state.choices, [id]: !this.state.choices[id] }
      this.setState({ choices })
    }

    render() {
      return (
        <Comp choices={this.state.choices} handleChoice={this.handleChoice} {...this.props} />
      )
    }
  }
)

export class Cages extends React.Component {
  static cages = [
    { id: 1, url: 'https://www.placecage.com/200/301' },
    { id: 2, url: 'https://www.placecage.com/200/302' },
    { id: 3, url: 'https://www.placecage.com/200/303' },
    { id: 4, url: 'https://www.placecage.com/200/304' },
  ]

  render() {
    const { choices, handleChoice } = this.props
    return (
      <div className="pickable">
        {Cages.cages.map((cage) => (
          <div className="cage-display" key={cage.id}>
            <div className="cage-img" onClick={() => { handleChoice(cage.id) }} data-test-id="dt-cage">
              <img src={cage.url} alt="A beautiful cage" />
              {choices[cage.id] && (
                <div className="overlay overlay-yes" data-test-id="dt-overlay" />
              )}
            </div>
          </div>
        ))}
      </div>
    )
  }
}
const PickableCages = withPickable(Cages)

export class Segals extends React.Component {
  static segals = [
    { id: 1, url: 'https://www.stevensegallery.com/200/301' },
    { id: 2, url: 'https://www.stevensegallery.com/200/302' },
    { id: 3, url: 'https://www.stevensegallery.com/200/303' },
    { id: 4, url: 'https://www.stevensegallery.com/200/304' },
  ]

  render() {
    const { choices, handleChoice } = this.props
    return (
      <div className="pickable">
        {Segals.segals.map((segal) => (
          <div className="cage-display" key={segal.id} data-test-id="dt-segal">
            <div className="cage-img">
              <img src={segal.url} alt="A beautiful segal" />
              {choices[segal.id] && (
                <div className="overlay overlay-yes" data-test-id="dt-overlay" />
              )}
            </div>
            <button onClick={() => { handleChoice(segal.id) }}>OH YEAH</button>
          </div>
        ))}
      </div>
    )
  }
}
const PickableSegals = withPickable(Segals)

export class App extends React.Component {

  render() {
    return (
      <div className="App">
        <PickableCages />
        <PickableSegals />
      </div>
    )
  }
}
