import React from 'react'
import './App.scss'
import $ from 'jquery'

const cages = [
  'https://www.placecage.com/200/300',
  'https://www.placecage.com/200/301',
  'https://www.placecage.com/200/302',
]

export class App extends React.Component {
  pickCage = (index, choice) => {
    console.log('this', this)
    // $(`[data-cage-selector="${index}"]`).removeClass('overlay-yes overlay-no').addClass(`overlay-${choice ? 'yes' : 'no'}`)

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {cages.map((cage, i) => (
            <div className="cage-display" key={cage}>
              <button onClick={this.pickCage(i, false)}>No</button>
              <div className="cage-img">
                <img src={cage} alt="A beautiful cage" />
                <div data-cage-selector={`${i}`} className="overlay" />
              </div>
              <button onClick={this.pickCage(i, true)}>Yes</button>
            </div>
          ))}
        </header>
      </div>
    )
  }
}
