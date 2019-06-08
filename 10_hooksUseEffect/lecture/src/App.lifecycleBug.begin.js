import React, { useState } from 'react'

const Logger = (text) => ({
  print() { console.log(text) }
})

export class Repeater extends React.Component {
  componentDidMount() {
    this._interval = setInterval(Logger(this.props.text).print, 1000)
  }

  componentWillMount() {
    clearInterval(this._interval)
  }

  render() {
    return null
  }
}

export const App = () => {
  const [text, setText] = useState('Hello world')
  const handleChange = e => setText(e.target.value)

  return (
    <div className="App">
      <input type="text" value={text} onChange={handleChange} />
      <Repeater text={text} />
    </div>
  )
}
