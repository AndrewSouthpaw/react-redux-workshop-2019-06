import React, { useState } from 'react'
import './App.scss'

const Index = () => (<h2>Index</h2>)
const Cage = () => (
  <div>
    <h2>Nicolas Cage</h2>
    <img src="https://www.placecage.com/200/300" />
  </div>
)
const Murray = () => (
  <div>
    <h2>Fill Murray</h2>
    <img src="https://www.fillmurray.com/200/300" />
  </div>
)
const Segal = () => (
  <div>
    <h2>Steven Segallery</h2>
    <img src="https://www.stevensegallery.com/200/300" />
  </div>
)
const NotFound = () => (<h2>🤷‍♂️</h2>)

const routes = {
  Index,
  Cage,
  Murray,
  Segal,
}

export const App = () => {
  const [route, setRoute] = useState('Index')
  const RouteComponent = routes[route] || NotFound
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li onClick={() => { setRoute('Home') }}>Home</li>
            <li onClick={() => { setRoute('Cage') }}>Cage</li>
            <li onClick={() => { setRoute('Murray') }}>Murray</li>
            <li onClick={() => { setRoute('Segal') }}>Segal</li>
            <li onClick={() => { setRoute('Sonic') }}>Sonic</li>
          </ul>
        </nav>
      </div>

      <RouteComponent />
    </div>
  )
}
