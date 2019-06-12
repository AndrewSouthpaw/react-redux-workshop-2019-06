import { createHandlers } from 'redux-handlers'
import { nextId } from './lib/nextId'

const { registerHandler, createReducer } = createHandlers()

export const addTodo = (text, state) => state.concat([{ id: nextId(), text: text.substring(0, 5), completed: false }])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => (
  state.map((todo, i) => (
    index === i ? { text: todo.text, completed: true } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)


export const reducer = createReducer([])
