import { createHandlers } from 'redux-handlers'
import { nextTodoId } from './lib/helpers'
import { assocPath } from 'ramda'
import { getTodo } from './selectors'

const { registerHandler, createReducer } = createHandlers()

export const addTodo = (todo, state) => {
  const newTodo = { id: nextTodoId(), text: todo, completed: false }
  return assocPath(['byId', newTodo.id], newTodo, state)
}
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => {
  const todo = getTodo(id, state)
  return assocPath(['byId', id, 'completed'], !todo.completed, state)
}
registerHandler('TOGGLE_TODO', toggleTodo)

export const showTodo = (id, state) => {
  const todo = getTodo(id, state)
  return assoc('currentTodo', todo, state)
}

export const addLabelToTodo = (id, state) => {
  const todo = getTodo(id, state)
  return assoc('currentTodo', todo, state)
}

export const reducer = createReducer({
  byId: {}
})
