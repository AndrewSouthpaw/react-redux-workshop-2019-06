import React from 'react'

export class Todo extends React.Component {
  render() {
    return (<div className="form-group">{this.props.name}</div>)
  }
}
