import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addList, addTodoToList, chooseList, toggleTodo } from './actions'
import { Todo } from './lib/Todo'
import { getActiveList, getLists, getTodos } from './selectors'

export class _Todos extends React.Component {
  state = {
    todo: '',
  }

  submitForm = (e) => {
    e.preventDefault()
    const { dispatch, list } = this.props
    dispatch(addTodoToList(list.id, this.state.todo))
    this.setState({ todo: '' })
  }

  handleCheckTodo = (id) => { this.props.dispatch(toggleTodo(id)) }

  handleInput = (key) => (e) => { this.setState({ [key]: e.target.value }) }

  render() {
    const { list, todos } = this.props
    const { todo } = this.state

    if (!list) return (<p>Select a list</p>)

    return (
      <div className="todos-pane">
        <h3>{list.name} ({todos.length})</h3>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Add a todo"
            name="todo"
            value={todo}
            onChange={this.handleInput('todo')}
            data-test-id="dt-todo-input"
          />
          <button type="submit">Add Todo</button>
        </form>
        <ul data-test-id="todos">
          {todos.length === 0 ? (
            <p>Add some todos</p>
          ) : (
            todos.map((todo) => (
              <Todo {...todo} key={todo.id} onChange={() => { this.handleCheckTodo(todo.id) }} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

const _TodosMapStateToProps = (state, ownProps) => {
  const list = getActiveList(state.lists)
  return ({
    todos: list ? getTodos(list.todoIds, state.todos) : [],
    list,
  })
}
export const Todos = connect(_TodosMapStateToProps)(_Todos)

export class _Lists extends React.Component {
  state = {
    list: '',
  }

  submitForm = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { list } = this.state
    dispatch(addList(list))
    this.setState({ list: '' })
  }

  handleInput = (key) => (e) => { this.setState({ [key]: e.target.value }) }

  handleChooseList = (id) => { this.props.dispatch(chooseList(id)) }

  render() {
    const { activeList, lists } = this.props
    const { list } = this.state
    return (
      <div className="lists-pane">
        <h3>Lists ({lists.length})</h3>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Add a list"
            value={list}
            onChange={this.handleInput('list')}
            data-test-id="dt-list-input"
          />
          <button type="submit">Add List</button>
        </form>
        <ul>
          {lists.map(list => (
            <li key={list.id} onClick={() => this.handleChooseList(list.id)}>
              {list.name}
              {activeList.id === list.id && ' <'}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const _ListsMapStateToProps = (state, ownProps) => ({
  lists: getLists(state.lists),
  activeList: getActiveList(state.lists) || {},
})
export const Lists = connect(_ListsMapStateToProps)(_Lists)

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Lists />
        <Todos />
      </div>
    )
  }
}
