import React from 'react'

export class Todo extends React.Component {
  render() {
    return (
      <div className="form-group">
        <label>
          <input type="checkbox" onChange={this.props.onChange} checked={this.props.completed} />
          <span style={this.props.completed ? { textDecoration: 'line-through' } : {}}>
            {this.props.text}
          </span>
        </label>
      </div>
    )
  }
}
