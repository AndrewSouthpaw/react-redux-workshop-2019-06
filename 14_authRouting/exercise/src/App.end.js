import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, withRouter } from 'react-router-dom'
import { fakeAuthV2Async } from './lib/helpers'

const Profile = withRouter(({ history }) => {
  const [loaded, setLoaded] = useState(false)
  const [hasAuth, setAuth] = useState(false)
  useEffect(() => {
    (async () => {
      if (await fakeAuthV2Async.isAuthenticated()) {
        setAuth(true)
        setLoaded(true)
      }
    })()
  }, [])

  const signOut = async () => {
    await fakeAuthV2Async.signOut()
    history.push('/')
  }

  if (!loaded) return null

  return (
    hasAuth ? (
      <p>
        Welcome!{' '}
        <button onClick={signOut}>Sign out</button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  )
})

const PrivateRoute = withRouter(({ component: Component, ...rest }) => {
  const [loaded, setLoaded] = useState(false)
  const [hasAuth, setAuth] = useState(false)
  const checkAuth = async () => {
    setAuth(await fakeAuthV2Async.isAuthenticated())
    setLoaded(true)
  }
  useEffect(() => { checkAuth() })
  useEffect(() => {
    const unlisten = rest.history.listen(checkAuth)
    return () => unlisten()
  })

  console.log('loaded', loaded)
  console.log('hasAuth', hasAuth)
  if (!loaded) return null

  return (
    <Route
      {...rest}
      render={props => (
        hasAuth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      )}
    />
  )
})

function Public() {
  return <h3>Public</h3>
}

const ProtectedOne = () => <h3>ProtectedOne</h3>
const ProtectedTwo = () => <h3>ProtectedTwo</h3>
const ProtectedThree = () => <h3>ProtectedThree</h3>
const ProtectedFour = () => <h3>ProtectedFour</h3>

class Login extends React.Component {
  state = { redirectToReferrer: false }

  login = async () => {
    await fakeAuthV2Async.authenticate()
    console.log('done')
    this.setState({ redirectToReferrer: true })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state
    console.log('redirectToReferrer', redirectToReferrer)

    if (redirectToReferrer) return <Redirect to={from} />

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    )
  }
}

export const App = () => {
  return (
    <Router>
      <div>
        <Profile />
        <ul>
          <li><Link to="/public">Public Page</Link></li>
          <li><Link to="/protected-one">Protected One</Link></li>
          <li><Link to="/protected-two">Protected Two</Link></li>
          <li><Link to="/protected-three">Protected Three</Link></li>
          <li><Link to="/protected-four">Protected Four</Link></li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <PrivateRoute path="/protected-one" component={ProtectedOne} />
        <PrivateRoute path="/protected-two" component={ProtectedTwo} />
        <PrivateRoute path="/protected-three" component={ProtectedThree} />
        <PrivateRoute path="/protected-four" component={ProtectedFour} />
      </div>
    </Router>
  )
}
