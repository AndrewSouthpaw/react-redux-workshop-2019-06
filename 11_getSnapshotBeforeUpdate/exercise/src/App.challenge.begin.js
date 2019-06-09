import React, { useEffect, useState } from 'react'
import './App.scss'

class PinScrollToBottom extends React.Component {
  listRef = React.createRef()

  componentDidUpdate(prevProps, prevState) {
    this.scroll()
  }

  scroll() { this.listRef.current.scrollTop = this.listRef.current.scrollHeight }

  render() {
    return (
      <div className="scrollable" ref={this.listRef}>
        {this.props.children}
      </div>
    )
  }
}

export const App = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    setTimeout(() => { setMessages([...messages, App.counter++]) }, 1000)
  })
  return (
    <div className="App">
      <PinScrollToBottom>
        {messages.map((item, i) => (
          <div key={i} className="list-item">{item}</div>
        ))}
      </PinScrollToBottom>
    </div>
  )
}

App.counter = 0
