import React, { useEffect, useState } from 'react'

const Logger = (text) => ({
  print() { console.log(text) }
})

export const Repeater = ({ text, color }) => {
  useEffect(() => {
    const interval = setInterval(Logger(text).print, 1000)
    return () => clearInterval(interval)
  }, [text])
  return (
    <div>My favorite color is {color}</div>
  )
}

export const App = () => {
  const [text, setText] = useState('Hello world')
  const [color, setColor] = useState('blue')
  const handleChangeWith = setter => e => setter(e.target.value)

  return (
    <div className="App">
      Text to repeat: <input type="text" value={text} onChange={handleChangeWith(setText)} />
      Favorite color: <input type="text" value={color} onChange={handleChangeWith(setColor)} />
      <Repeater text={text} color={color} />
    </div>
  )
}
