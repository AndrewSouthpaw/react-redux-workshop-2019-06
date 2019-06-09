import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

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

export const App = () => {
  return (
    <Router>
      <div className="App">
        <div>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/cage">Cage</Link></li>
              <li><Link to="/murray">Murray</Link></li>
              <li><Link to="/segal">Segal</Link></li>
              <li><Link to="/sonic">Sonic</Link></li>
            </ul>
          </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Index} />
          <Route path="/cage" component={Cage} />
          <Route path="/murray" component={Murray} />
          <Route path="/segal" component={Segal} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  )
}
