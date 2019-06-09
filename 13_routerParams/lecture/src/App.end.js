import React from 'react'
import './App.scss'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import JSONPetty from 'react-json-pretty'
import { reverse, values } from 'ramda'

const RouterInfo = ({ location }) => {
  return (
    <div className="RouterInfo" style={{ flex: 1 }}>
      <p>Location info:</p>
      <JSONPetty data={location} />
    </div>
  )
}

const showMatch = Comp => ({ match, ...rest }) => (
  <div>
    <p>Match info:</p>
    <code><JSONPetty data={match} /></code>
    <Comp match={match} {...rest} />
  </div>
)

const users = {
  1: { id: 1, name: 'Andrew' },
  2: { id: 2, name: 'Billy' },
  3: { id: 3, name: 'Charlie' },
}

const Index = showMatch(() => (<h2>Index</h2>))
const About = showMatch(() => (<h2>About</h2>))
const Users = showMatch(() => {
  const params = new URLSearchParams(window.location.search)
  const desc = params.get('sort') === 'desc'
  const sortedUsers = desc ? reverse(values(users)) : values(users)
  return (
    <div>
      <h2>Users</h2>
      <ul>
        {sortedUsers.map(({ id, name }) => (
          <li><Link to={`/users/${id}`}>{name}</Link></li>
          ))}
      </ul>
    </div>
  )
})
const ShowUser = showMatch(({ match }) => {
  const user = users[match.params.id]
  return (
    <div>
      <p>Name: {user.name}</p>
    </div>
  )
})
const NotFound = showMatch(() => (<h2>🤷‍♂️</h2>))

export const App = () => {
  return (
    <Router>
      <div className="split-pane">
        <div className="App" style={{ flex: 5 }}>
          <div>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about/">About</Link></li>
                <li><Link to="/users/">Users</Link></li>
                <li><Link to="/woops/">Woops</Link></li>
              </ul>
            </nav>

            <Switch>
              <Route path="/" exact component={Index} />
              <Route path="/about/" component={About} />
              <Route path="/users/:id" component={ShowUser} />
              <Route path="/users/" component={Users} />
              <Route component={NotFound} />
            </Switch>

          </div>
        </div>

        <Route component={RouterInfo} />
      </div>
    </Router>
  )
}
