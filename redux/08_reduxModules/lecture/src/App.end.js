import React, { useState } from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addTodo, addTodoToList, toggleTodo } from './actions.end'
import { Todo } from './components/Todo'

const handleInput = (stateSetter) => (e) => { stateSetter(e.target.value) }
const hydrate = (indexedCollection, ids) => ids.map(id => indexedCollection[id])

export const _Todos = ({ list, todos, dispatch }) => {
  const [todo, setTodo] = useState('')
  const submitForm = (e) => {
    e.preventDefault()
    dispatch(addTodoToList(list.id, todo))
  }
  const handleCheckTodo = (id) => { dispatch(toggleTodo(id)) }
  return (
    <div className="todos-pane">
      <h1>{list.name} ({todos.length})</h1>
      <form onSubmit={submitForm}>
        <input type="text" placeholder="Add a todo" name="todo" value={todo} onChange={handleInput(setTodo)} />
        <button type="submit">Add Todo</button>
      </form>
      <ul data-test-id="todos">
        {todos.map((todo) => (
          <Todo {...todo} key={todo.id} onChange={() => { handleCheckTodo(todo.id) }} />
        ))}
      </ul>
    </div>
  )
}

const _TodosMapStateToProps = (state, ownProps) => {
  const list = state.lists[ownProps.listId]
  return ({
    todos: hydrate(state.todos, list.todoIds),
    list,
  })
}
export const Todos = connect(_TodosMapStateToProps)(_Todos)

export class _App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="lists-pane">

        </div>
        <Todos listId={1} />
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  todos: state.todos,
})

export const App = connect(mapStateToProps)(_App)
