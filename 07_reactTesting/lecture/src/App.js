import React from 'react'
import avatar from './avatar.jpg'
import './App.scss'

export class NameBadge extends React.Component {
  state = {
    following: false,
  }

  addFollower = () => {
    this.setState({ following: !this.state.following })
  }

  render() {
    const { name, avatar } = this.props
    const { following } = this.state
    return (
      <div className="NameBadge">
        <div>
          <img className="avatar" src={avatar} />
        </div>
        <div>
          <p>
            {name}
            {following && ' (Following)'}
          </p>
          <button onClick={this.addFollower}>{following ? 'Unfollow' : 'Follow'}</button>
        </div>
      </div>
    )
  }
}

export class App extends React.Component {
  render() {
    return (<NameBadge name="Andrew Smith" avatar={avatar} />)
  }
}
