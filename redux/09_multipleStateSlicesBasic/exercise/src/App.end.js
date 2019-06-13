import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addTodo, logIn, logOut, toggleTodo } from './actions'
import { Todo } from './lib/Todo'
import { getTodos, getUser } from './selectors'

export const _RequireUser = ({ dispatch, user, children }) => (
  <div>
    {user ? (
      <>
        <p>
          <button onClick={() => dispatch(logOut())}>Log out</button>
        </p>
        {children}
      </>
    ) : (
      <button onClick={() => dispatch(logIn())}>Log In</button>
    )}
  </div>
)
const userMapStateToProps = (state, ownProps) => ({
  user: getUser(state.user),
})
export const RequireUser = connect(userMapStateToProps)(_RequireUser)

export class _App extends React.Component {
  state = {
    todo: '',
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todo } = this.state
    const entireReduxState = this.props.dispatch(addTodo(todo))
    console.log(entireReduxState)
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  handleTodoCheck = (id) => { this.props.dispatch(toggleTodo(id)) }

  render() {
    const { todos } = this.props
    const { todo } = this.state
    return (
      <div className="App">
        <div>
          <RequireUser>
            <h1>My Todos ({todos.length})</h1>
            <form onSubmit={this.addTodo}>
              <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={this.handleChange} />
              <button type="submit">Add Todo</button>
            </form>
            <ul data-test-id="todos">
              {todos.map((todo) => (
                <Todo {...todo} key={todo.id} onChange={() => { this.handleTodoCheck(todo.id) }} />
              ))}
            </ul>
          </RequireUser>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: getTodos(state.todos),
})

export const App = connect(mapStateToProps)(_App)
