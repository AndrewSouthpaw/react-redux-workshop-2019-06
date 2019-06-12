import { createHandlers } from 'redux-handlers'
import { curry } from 'ramda'

const todosHandler = createHandlers()

export const addTodo = (text, state) => state.concat([{ text, completed: false }])
todosHandler.registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => (
  state.map((todo, i) => (
    index === i ? { text: todo.text, completed: !todo.completed } : todo
  ))
)
todosHandler.registerHandler('TOGGLE_TODO', toggleTodo)

export const todos = todosHandler.createReducer([])

export function todoAppState(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  }
}
