import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addTodo, doComplicatedThing, getTodosFromServerAsync, toggleTodo } from './actions'

class Todo extends React.Component {
  render() {
    return (
      <div className="form-group">
        <input type="checkbox" onChange={this.props.markComplete} checked={this.props.completed} />
        <span style={this.props.completed ? { textDecoration: 'line-through' } : {}}>
          {this.props.text}
        </span>
      </div>
    )
  }
}

export class _App extends React.Component {
  state = {
    todo: '',
    loading: true,
  }

  async componentDidMount() {
    await this.props.dispatch(getTodosFromServerAsync())
    this.setState({ loading: false })
  }

  resetFom() { this.setState({ todo: '' }) }

  addTodo = (e) => {
    e.preventDefault()
    const { todo } = this.state
    this.props.dispatch(addTodo(todo))
    this.resetFom()
  }

  handleChange = (e) => { this.setState({ todo: e.target.value }) }

  handleTodoCheck = (i) => { this.props.dispatch(toggleTodo(i)) }

  doComplicatedThing = () => { this.props.dispatch(doComplicatedThing()) }

  render() {
    const { todos } = this.props
    const { loading } = this.state
    return (
      <div className="App">
        <h1>My Todos ({todos.length})</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <form onSubmit={this.addTodo}>
              <input type="text" placeholder="Add a todo" name="todo" />
              <button type="submit">Add Todo</button>
            </form>
            <ul data-test-id="todos">
              {todos.map((todo, i) => (
                <Todo {...todo} key={todo.id} onChange={() => { this.handleTodoCheck(i) }} />
              ))}
            </ul>
            <button onClick={this.doComplicatedThing}>Do something REALLY COMPLICATED</button>
          </>
        )}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
})

export const App = connect(mapStateToProps)(_App)
