import React, { useState } from 'react'
import './App.scss'

export const PickableCages = () => {
  const [cageChoices, setCageChoices] = useState({})

  const toggleCage = (id) => {
    setCageChoices({ ...cageChoices, [id]: !cageChoices[id] })
  }

  return PickableCages.cages.map((cage) => (
    <div className="cage-display" key={cage.id}>
      <div className="cage-img" onClick={() => { toggleCage(cage.id) }} data-test-id="dt-cage">
        <img src={cage.url} alt="A beautiful cage" />
        {cageChoices[cage.id] && (
          <div className="overlay overlay-yes" data-test-id="dt-overlay" />
        )}
      </div>
    </div>
  ))
}

PickableCages.cages = [
  { id: 1, url: 'https://www.placecage.com/200/301' },
  { id: 2, url: 'https://www.placecage.com/200/302' },
  { id: 3, url: 'https://www.placecage.com/200/303' },
  { id: 4, url: 'https://www.placecage.com/200/304' },
]

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <PickableCages />
      </div>
    )
  }
}
