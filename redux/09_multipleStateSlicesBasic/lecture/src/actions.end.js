// preferences
import { getTodos } from './selectors'

export const incrementMaxTodos = () =>
  ({ type: 'INCREMENT_MAX' })

export const decrementMaxTodos = () =>
  ({ type: 'DECREMENT_MAX' })

// todos
export const receiveTodos = (todos) =>
  ({ type: 'RECEIVE_TODOS', todos })

export const _addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (id) =>
  ({ type: 'TOGGLE_TODO', id })

export const addTodo = (todo) => (
  (dispatch, getState) => {
    const state = getState()
    const maxTodos = state.preferences.maxTodos
    const numTodos = getTodos(state.todos).length

    if (numTodos >= maxTodos) throw new Error('Exceeded max todos')

    dispatch(_addTodo(todo))
  }
)
