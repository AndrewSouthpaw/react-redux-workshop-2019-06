import { createHandlers } from 'redux-handlers'
import { nextId } from './lib/nextId'

const { registerHandler, createReducer } = createHandlers()

export const addTodo = (text, state) => state.concat([{ id: nextId(), text, completed: false }])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => (
  state.map((todo, i) => (
    id === i ? { ...todo, completed: !todo.completed } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)


export const reducer = createReducer([])
