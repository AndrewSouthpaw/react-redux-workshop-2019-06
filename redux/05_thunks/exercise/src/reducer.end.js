import { createHandlers } from 'redux-handlers'

const { registerHandler, createReducer } = createHandlers()

export const receiveTodos = (todos, state) => todos
registerHandler('RECEIVE_TODOS', receiveTodos)

export const addTodo = (todo, state) => state.concat([todo])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => (
  state.map((todo) => (
    id === todo.id ? { ...todo, completed: !todo.completed } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)


export const reducer = createReducer([])
