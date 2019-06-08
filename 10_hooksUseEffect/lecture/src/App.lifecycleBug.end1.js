import React, { useEffect, useState } from 'react'

const Logger = (text) => ({
  print() { console.log(text) }
})

export const Repeater = ({ text }) => {
  useEffect(() => {
    setInterval(Logger(text).print, 1000)
  })
  return null
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
