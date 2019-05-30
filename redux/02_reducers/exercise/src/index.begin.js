import { Handlers } from './handlers'

/**
 * Goal:
 * - refactor visibilityFilter and tests to use reducer handlers
 */

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

const todosHandler = Handlers()

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
