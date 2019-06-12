import { createHandlers } from 'redux-handlers'

const { registerHandler, createReducer } = createHandlers()

export const addTodo = (todo, state) => state.concat([todo])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => (
  state.map((todo, i) => (
    index === i ? { text: todo.text, completed: !todo.completed } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)


export const reducer = createReducer([])
