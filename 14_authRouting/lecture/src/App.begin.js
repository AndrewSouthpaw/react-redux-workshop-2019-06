import React from 'react'
import { BrowserRouter as Router, Link, Redirect, Route, withRouter } from 'react-router-dom'
import { fakeAuth } from './lib/helpers'

const Profile = withRouter(({ history }) => (
  fakeAuth.isAuthenticated ? (
    <p>
      Welcome!{' '}
      <button
        onClick={async () => {
          await fakeAuth.signOut()
          history.push('/')
        }}
      >
        Sign out
      </button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  )
))

function Public() {
  return <h3>Public</h3>
}

const Protected = () => {
  return (<h3>Protected</h3>)
}

// const Protected = ({ history, location }) => {
//   if (!fakeAuth.isAuthenticated) {
//     history.push('/login', { from: location })
//     return null
//   }
//   console.log('yo')
//   return (<h3>Protected</h3>)
// }

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
          <li>
            <Link to="/public">Public Page</Link>
          </li>
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Route path="/public" component={Public} />
        <Route path="/login" component={Login} />
        <Route path="/protected" component={Protected} />
      </div>
    </Router>
  )
}
