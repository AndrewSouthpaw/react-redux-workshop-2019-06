import React from 'react'

export class Todo extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input type="checkbox" onChange={this.props.onChange} />
        {this.props.name}
      </div>
    )
  }
}
