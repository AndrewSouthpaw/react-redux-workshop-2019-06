import React from 'react'
import './App.scss'
import { sleep, slowServerCall } from './lib/helpers'

export class App extends React.Component {
  state = {
    state: 'idle', // "listening", "listened"
  }

  inputRef = React.createRef()

  contentRef = React.createRef()

  handleFormSubmit = async (e) => {
    e.preventDefault()
    this.setState({ state: 'listening' })
    await slowServerCall(this.inputRef.current.value)
    this.setState({ state: 'listened' })
    await sleep(5000)
    this.setState({ state: 'idle' })
  }

  render() {
    let { state } = this.state
    return (
      <div className="App">
        <div>
          <p>Tell me something good</p>
          {state === 'idle' ? (
            <form onSubmit={this.handleFormSubmit}>
              <input placeholder="Breathing through your mouth is a learned behavior" ref={this.inputRef} />
              {' '}
              <button>Tell me!</button>
            </form>
          ) : (
            <div ref={this.contentRef} tabIndex="-1">
              {state === 'listening' ? (
                <p>Listening ...</p>
              ) : state === 'listened' ? (
                <p>That was so interesting, thanks!</p>
              ) : null}
            </div>
          )}
        </div>

        <hr />

        <p>Here's some other stuff on the page</p>
        <button>I am a button</button>
        <button>I am another</button>
      </div>
    )
  }
}

// componentDidUpdate() {
//   let { state } = this.state
//   if (state === 'idle') {
//     this.inputRef.current.focus()
//   } else {
//     this.contentRef.current.focus()
//   }
// }
