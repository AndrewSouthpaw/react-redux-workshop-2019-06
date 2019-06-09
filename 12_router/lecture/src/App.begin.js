import React, { useState } from 'react'
import './App.scss'

const Index = () => (<h2>Index</h2>)
const About = () => (<h2>About</h2>)
const Users = () => (<h2>Users</h2>)
const NotFound = () => (<h2>🤷‍♂️</h2>)

export const App = () => {
  const [route, setRoute] = useState('/')

  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li onClick={() => { setRoute('/') }}>Home</li>
            <li onClick={() => { setRoute('/about/') }}>About</li>
            <li onClick={() => { setRoute('/users/') }}>Users</li>
            <li onClick={() => { setRoute('/woops/') }}>Woops</li>
          </ul>
        </nav>

        {route === '/' ? (
          <Index />
        ) : (
          route === '/about/' ? (
            <About />
          ) : (
            route === '/users/' ? (
              <Users />
            ) : (
              <NotFound />
            )
          )
        )}
      </div>
    </div>
  )
}
