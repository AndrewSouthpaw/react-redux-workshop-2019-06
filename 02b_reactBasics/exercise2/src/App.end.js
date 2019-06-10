import React from 'react'
import './App.scss'

class DocumentTitle extends React.Component {
  componentDidMount() {
    document.title = this.props.children
  }

  componentDidUpdate() {
    document.title = this.props.children
  }

  render() {
    return null
  }
}

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
        <DocumentTitle>{`Rank My Cage (${3 - Object.keys(cageChoices).length})`}</DocumentTitle>
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
