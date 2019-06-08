import React, { useEffect, useState } from 'react'
import './App.scss'

class PinScrollToBottom extends React.Component {
  componentDidMount() {
    this.scroll()
  }

  componentDidUpdate(prevProps, prevState, atBottom) {
    if (atBottom) {
      this.scroll()
    }
  }

  scroll() {
    document.documentElement.scrollTop = document.documentElement.scrollHeight
  }

  getSnapshotBeforeUpdate() {
    const { scrollHeight, scrollTop, clientHeight } = document.documentElement
    const atBottom = scrollHeight < scrollTop + clientHeight + 20
    return atBottom
  }

  render() {
    return this.props.children
  }
}

class ScrollingList extends React.Component {
  constructor(props) {
    super(props)
    this.listRef = React.createRef()
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // Are we adding new items to the list?
    // Capture the scroll position so we can adjust scroll later.
    if (prevProps.list.length < this.props.list.length) {
      const list = this.listRef.current
      console.log('old list.scrollHeight', list.scrollHeight)
      return list.scrollHeight - list.scrollTop
    }
    return null
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    // If we have a snapshot value, we've just added new items.
    // Adjust scroll so these new items don't push the old ones out of view.
    // (snapshot here is the value returned from getSnapshotBeforeUpdate)
    if (snapshot !== null) {
      const list = this.listRef.current
      console.log('list.scrollHeight', list.scrollHeight)
      console.log('snapshot', snapshot)
      list.scrollTop = list.scrollHeight - snapshot
    }
  }

  // componentDidUpdate(prevProps, prevState) {
  //   // If we have a snapshot value, we've just added new items.
  //   // Adjust scroll so these new items don't push the old ones out of view.
  //   // (snapshot here is the value returned from getSnapshotBeforeUpdate)
  //   if (prevProps.list.length < this.props.list.length) {
  //     const list = this.listRef.current
  //     const diff = list.scrollHeight - list.scrollTop
  //     console.log('list.scrollHeight', list.scrollHeight)
  //     console.log('list.scrollTop', list.scrollTop)
  //     list.scrollTop = list.scrollHeight - diff
  //     console.log('new list.scrollTop', list.scrollTop)
  //     console.log('===')
  //   }
  // }

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
    setTimeout(() => { setMessages([...messages, App.counter++]) }, 1000)
  })
  return (
    <div className="App">
      <ScrollingList list={messages} />
      {/*<PinScrollToBottom>*/}
      {/*  {messages.map((item, i) => (*/}
      {/*    <div key={i} className="list-item">{item}</div>*/}
      {/*  ))}*/}
      {/*</PinScrollToBottom>*/}
    </div>
  )
}

App.counter = 0
