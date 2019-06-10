import React from 'react'
import logo from './logo.svg'
import './App.scss'

const One = () => (<p>One</p>)
const Two = () => (<p>Two</p>)
const Three = () => (<p>Three</p>)
const Numbers = () => (
  <>
    <One />
    <Two />
    <Three />
  </>
)

function App() {
  const numbers = ['One', 'Two', 'Three']
  return (
    <div className="App">
      <header className="App-header">
        <Numbers />
      </header>
    </div>
  )
}

export default App
