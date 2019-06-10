import React from 'react'
import './App.scss'

/**
 *
 * Instructions:
 * Goal: Update the document title to say "Rank My Cage ([incomplete])" as the data changes.
 *
 * - Make a `<DocumentTitle/>` component
 * - Pass it a prop with the string for the title
 * - You will need `componentDidMount` and one other lifecycle method to keep the component up to date with the
 *   data (https://reactjs.org/docs/react-component.html#updating)
 * - the web API to update the title is `document.title = "some string"`
 *
 */

export class App extends React.Component {
  state = {
    cageChoices: {},
  }

  cages = [
    'https://www.placecage.com/200/300',
    'https://www.placecage.com/200/301',
    'https://www.placecage.com/200/302',
  ]

  pickCage = (i, choice) => () => {
    const cageChoices = { ...this.state.cageChoices, [i]: choice }
    this.setState({ cageChoices })
  }

  render() {
    const { cageChoices } = this.state
    return (
      <div className="App">
        <header className="App-header">
          {this.cages.map((cage, i) => (
            <div className="cage-display" key={cage}>
              <button onClick={this.pickCage(i, false)}>No</button>
              <div className="cage-img">
                <img src={cage} alt="A beautiful cage" />
                {cageChoices[i] !== undefined && (
                  <div className={`overlay overlay-${cageChoices[i] ? 'yes' : 'no'}`} />
                )}
              </div>
              <button onClick={this.pickCage(i, true)}>Yes</button>
            </div>
          ))}
        </header>
      </div>
    )
  }
}
