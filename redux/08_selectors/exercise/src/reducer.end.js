import { createHandlers } from 'redux-handlers'
import { nextTodoId } from './lib/helpers'
import { concat, evolve } from 'ramda'

const { registerHandler, createReducer } = createHandlers()

// { allTodos: [], ... }

export const addTodo = (todo, state) => {
  const newTodo = { id: nextTodoId(), text: todo, completed: false }
  return evolve({ allTodos: concat([newTodo]) }, state)
}
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => (
  state.map((todo) => (
    id === todo.id ? { ...todo, completed: !todo.completed } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)

export const reducer = createReducer({ allTodos: [] })
