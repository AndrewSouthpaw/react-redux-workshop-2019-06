import React, { useState } from 'react'
import './App.scss'
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'
import JSONPetty from 'react-json-pretty'

const RouterInfo = ({ location }) => {
  return (
    <div className="RouterInfo">
      <p>Location info:</p>
      <JSONPetty data={location} />
    </div>
  )
}

const Index = () => (<h2>Index</h2>)
const About = () => (<h2>About</h2>)
const Users = () => (<h2>Users</h2>)
const NotFound = () => (<h2>🤷‍♂️</h2>)

export const App = () => {
  return (
    <Router>
      <div className="split-pane">
        <div className="App" style={{ flex: 1 }}>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/users/">Users</Link></li>
                <li><Link to="/woops/">Woops</Link></li>
              </ul>
            </nav>

            <div data-test-id="dt-main">
              <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/about/" component={About} />
                <Route path="/users/" component={Users} />
                <Route component={NotFound} />
              </Switch>
            </div>

          </div>
        </div>

        <Route component={RouterInfo} />
      </div>
    </Router>
  )
}
