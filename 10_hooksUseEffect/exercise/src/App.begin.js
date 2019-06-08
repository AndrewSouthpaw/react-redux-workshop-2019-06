import React from 'react'
import { addIndex, map } from 'ramda'

const mapIndexed = addIndex(map)

const FriendService = () => {
  let interval
  let subscribedId
  let callsOnSameSubscribedId = 0

  const checkForServiceOverload = (id) => {
    if (id !== subscribedId) {
      callsOnSameSubscribedId = 0
    } else {
      console.log('callsOnSameSubscribedId', callsOnSameSubscribedId)
      callsOnSameSubscribedId++
      if (callsOnSameSubscribedId > 10) {
        throw new Error('You broke the server sending too many subscribe/unsubscribe requests!')
      }
    }
  }

  return ({
    subscribe(id, cb) {
      console.log('yo')
      checkForServiceOverload(id)
      interval = setInterval(() => { cb(`This is Friend ${id} saying hello`) }, 1000)
      subscribedId = id
    },
    unsubscribe(id) {
      checkForServiceOverload(id)
      if (id !== subscribedId) throw new Error('Trying to unsubscribe someone that is not subscribed')
      clearInterval(interval)
    },
  })
}

export class GetFriendMessages extends React.Component {
  state = { friendService: FriendService() }

  componentDidMount() {
    this.state.friendService.subscribe(this.props.friendId, this.handleMessageReceived)
    window.foo = this.state.friendService
  }

  componentWillUnmount() {
    this.state.friendService.unsubscribe(this.props.friendId)
  }

  handleMessageReceived = this.props.onMessage

  render() {
    return null
  }
}

export const renderMessage = (text, i) => (<p key={i}>{text}</p>)

export class App extends React.Component {
  state = {
    friend: null,
    messages: [],
  }

  handleMessage = (message) => {
    const { messages, friend } = this.state
    this.setState({ messages: [...messages, `Friend ${friend} says: ${message}`] })
  }

  handleFriendChoice = (e) => { this.setState({ friend: e.target.value }) }

  stopMessages = () => { this.setState({ friend: null }) }

  render() {
    const { friend, messages } = this.state
    return (
      <div className="App">
        <div>
          <p>
            Choose a friend to receive messages from:&nbsp;
            <label className="radio-inline">
              <input type="radio" name="friend" id="inlineRadio1" value="1" onChange={this.handleFriendChoice} />
              Friend 1
            </label>
            <label className="radio-inline">
              <input type="radio" name="friend" id="inlineRadio2" value="2" onChange={this.handleFriendChoice} />
              Friend 2
            </label>
            <button onClick={this.stopMessages}>Stop</button>
          </p>
          {friend && <GetFriendMessages friendId={friend} onMessage={this.handleMessage} />}
          <h3>Messages</h3>
          {mapIndexed(renderMessage, messages)}
        </div>
      </div>
    )
  }
}
