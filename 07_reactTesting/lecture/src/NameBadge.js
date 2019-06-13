import React from 'react'

export class NameBadge extends React.Component {
  render() {
    const { name, avatar } = this.props
    return (
      <div className="NameBadge">
        <div>
          <img className="avatar" src={avatar} />
        </div>
        <div>
          <div>
            {name}
          </div>
        </div>
      </div>
    )
  }
}
