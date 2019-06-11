import { combineReducers } from 'redux'
import { createHandlers } from 'redux-handlers'

const state = {
  todos: [
    { text: 'Eat food', completed: true },
    { text: 'Exercise', completed: false },
  ],
  visibilityFilter: 'SHOW_COMPLETED',
}

export function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    case 'RESET_VISIBILITY_FILTER':
      return 'SHOW_ALL'
    default:
      return state
  }
}

const todosHandlers = createHandlers()

export const addTodo = (text, state) => {
  return state.concat([{ text: text, completed: false }])
}
todosHandlers.registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => {
  return state.map((todo, i) => (
    index === i ? { text: todo.text, completed: !todo.completed } : todo
  ))
}
todosHandlers.registerHandler('TOGGLE_TODO', toggleTodo)

export const todos = todosHandlers.createReducer({})

export const todoAppState = combineReducers({
  todos,
  visibilityFilter,
})
