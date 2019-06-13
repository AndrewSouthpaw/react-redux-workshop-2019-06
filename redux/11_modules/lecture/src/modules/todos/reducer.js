import { createHandlers } from 'redux-handlers'
import { assoc, evolve, indexBy, not, prop } from 'ramda'

const { registerHandler, createReducer } = createHandlers()

export const receiveTodos = (todos, state) => indexBy(prop('id'), todos)
registerHandler('RECEIVE_TODOS', receiveTodos)

export const addTodo = (todo, state) => assoc(todo.id, todo, state)
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => evolve({ [id]: { completed: not } }, state)
registerHandler('TOGGLE_TODO', toggleTodo)

export const reducer = createReducer({})
