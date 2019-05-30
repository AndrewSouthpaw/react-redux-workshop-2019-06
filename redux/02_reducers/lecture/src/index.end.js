import { Handlers } from './handlers'

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

const { registerHandler, createReducer } = Handlers()

export const addTodo = (text, state) => state.concat([{ text, completed: false }])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => (
  state.map((todo, i) => (
    index === i ? { text: todo.text, completed: !todo.completed } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)

export const todos = createReducer([])

export function todoAppState(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action),
  }
}
