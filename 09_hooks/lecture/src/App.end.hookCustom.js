import React, { useState } from 'react'
import './App.scss'

const usePickable = () => {
  const [choices, setChoices] = useState({})
  const handleChoice = (id) => { setChoices({ ...choices, [id]: !choices[id] }) }
  return { choices, handleChoice }
}

const PickableCages = () => {
  const { choices, handleChoice } = usePickable()
  return (
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
  )
}

PickableCages.cages = [
  { id: 1, url: 'https://www.placecage.com/200/301' },
  { id: 2, url: 'https://www.placecage.com/200/302' },
  { id: 3, url: 'https://www.placecage.com/200/303' },
  { id: 4, url: 'https://www.placecage.com/200/304' },
]

export const PickableSegals = () => {
  const { choices, handleChoice } = usePickable()
  return (
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
  )
}

PickableSegals.segals = [
  { id: 1, url: 'https://www.stevensegallery.com/200/301' },
  { id: 2, url: 'https://www.stevensegallery.com/200/302' },
  { id: 3, url: 'https://www.stevensegallery.com/200/303' },
  { id: 4, url: 'https://www.stevensegallery.com/200/304' },
]

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
