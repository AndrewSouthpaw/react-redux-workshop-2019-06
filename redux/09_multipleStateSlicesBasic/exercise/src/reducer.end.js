import { createHandlers } from 'redux-handlers'
import { assoc, dissoc, indexBy, prop } from 'ramda'
import { nextTodoId } from './lib/helpers'

const userHandlers = createHandlers()

export const logIn = (state) => ({ name: 'John Doe' })
userHandlers.registerHandler('LOG_IN', logIn)

export const logOut = (state) => null
userHandlers.registerHandler('LOG_OUT', logOut)

export const userReducer = userHandlers.createReducer(null)

// todos
const todosHandlers = createHandlers()

export const receiveTodos = (todos, state) => indexBy(prop('id'), todos)
todosHandlers.registerHandler('RECEIVE_TODOS', receiveTodos)

export const addTodo = (text, state) => {
  const newTodo = { id: nextTodoId(), text, completed: false }
  return assoc(newTodo.id, newTodo, state)
}
todosHandlers.registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => dissoc(id, state)
todosHandlers.registerHandler('TOGGLE_TODO', toggleTodo)

export const todosReducer = todosHandlers.createReducer({})
