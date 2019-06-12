import React from 'react'

export const Todo = ({ onChange, completed, text }) => {
  return (
    <div className="form-group">
      <input type="checkbox" onChange={onChange} checked={completed} />
      <span style={completed ? { textDecoration: 'line-through' } : {}}>
        {text}
      </span>
    </div>
  )
}
