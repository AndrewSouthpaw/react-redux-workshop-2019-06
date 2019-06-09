import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, withRouter } from 'react-router-dom'
import { fakeAuth } from './lib/helpers'

const Profile = withRouter(({ history }) => {
  const signOutAndRedirect = async () => {
    await fakeAuth.signOut()
    history.push('/')
  }
  return (
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{' '}
        <button onClick={signOutAndRedirect}>Sign out</button>
      </p>
    ) : (
      <p>You are not logged in.</p>
    )
  )
})

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      fakeAuth.isAuthenticated ? (
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
    await fakeAuth.authenticate()
    this.setState({ redirectToReferrer: true })
  }

  render() {
    const { from } = this.props.location.state || { from: { pathname: '/' } }
    const { redirectToReferrer } = this.state

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
