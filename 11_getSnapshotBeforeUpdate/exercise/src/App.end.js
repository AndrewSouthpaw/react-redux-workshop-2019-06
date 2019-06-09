import React, { useEffect, useState } from 'react'
import './App.scss'

class ScrollingFeedUp extends React.Component {
  listRef = React.createRef()

  getSnapshotBeforeUpdate(prevProps, prevState) {
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current
      return list.scrollHeight - list.scrollTop
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (snapshot !== null) {
      const list = this.listRef.current
      list.scrollTop = list.scrollHeight - snapshot
    }
  }

  render() {
    return (
      <div className="scrollable" ref={this.listRef}>
        {this.props.list.map((item, i) => (
          <div key={i} className="list-item">{item}</div>
        ))}
      </div>
    )
  }
}

export const App = () => {
  const [messages, setMessages] = useState([])
  useEffect(() => {
    setTimeout(() => { setMessages([App.counter++, ...messages]) }, 1000)
  })
  return (
    <div className="App">
      <ScrollingFeedUp list={messages} />
    </div>
  )
}

App.counter = 0
