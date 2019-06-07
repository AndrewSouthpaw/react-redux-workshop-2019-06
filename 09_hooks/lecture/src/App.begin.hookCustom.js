import React from 'react'
import './App.scss'

class Pickable extends React.Component {
  state = { choices: {} }

  handleChoice = (id) => {
    const choices = { ...this.state.choices, [id]: !this.state.choices[id] }
    this.setState({ choices })
  }

  render() {
    const { choices } = this.state
    const { handleChoice } = this
    return this.props.children({ choices, handleChoice })
  }
}

export class PickableCages extends React.Component {
  static cages = [
    { id: 1, url: 'https://www.placecage.com/200/301' },
    { id: 2, url: 'https://www.placecage.com/200/302' },
    { id: 3, url: 'https://www.placecage.com/200/303' },
    { id: 4, url: 'https://www.placecage.com/200/304' },
  ]

  render() {
    return (
      <Pickable>
        {({ choices, handleChoice }) => (
          <div className="pickable">
            {PickableCages.cages.map((cage) => (
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
        )}
      </Pickable>
    )
  }
}

export class PickableSegals extends React.Component {
  static segals = [
    { id: 1, url: 'https://www.stevensegallery.com/200/301' },
    { id: 2, url: 'https://www.stevensegallery.com/200/302' },
    { id: 3, url: 'https://www.stevensegallery.com/200/303' },
    { id: 4, url: 'https://www.stevensegallery.com/200/304' },
  ]

  render() {
    return (
      <Pickable>
        {({ choices, handleChoice }) => (
          <div className="pickable">
            {PickableSegals.segals.map((segal) => (
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
        )}
      </Pickable>
    )
  }
}

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
