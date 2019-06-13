import React from 'react'

export class NameBadge extends React.Component {
  state = {
    following: false,
    message: '',
  }

  addFollower = () => {
    this.setState({ following: !this.state.following })
  }

  handleChange = (e) => { this.setState({ message: e.target.value }) }

  handleSend = () => {this.setState({ success: true })}

  render() {
    const { name, avatar } = this.props
    const { success, following, message } = this.state
    return (
      <div className="NameBadge">
        <div>
          <img data-test-id="avatar" className="avatar" src={avatar} />
        </div>
        <div>
          {following && ' (Following)'}

          <div data-test-id="name">
            This person's name is {name}
          </div>
          <button onClick={this.addFollower}>{following ? 'Unfollow' : 'Follow'}</button>

          <p>
            Send {name} a message
          </p>

          <input data-test-id="message" onChange={this.handleChange} type="text" value={message} />
          <button onClick={this.handleSend}>Send message</button>
          {success && (<p>Successfully sent message</p>)}
        </div>
      </div>
    )
  }
}
