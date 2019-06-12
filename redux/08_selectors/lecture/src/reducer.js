import { createHandlers } from 'redux-handlers'
import { nextTodoId } from './lib/helpers'

const { registerHandler, createReducer } = createHandlers()

export const addTodo = (todo, state) => state.concat([{ id: nextTodoId(), text: todo, completed: false }])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => (
  state.map((todo) => (
    id === todo.id ? { ...todo, completed: !todo.completed } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)

export const reducer = createReducer([])
