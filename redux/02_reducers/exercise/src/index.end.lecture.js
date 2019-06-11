import { Handlers } from './handlers'
import { curry } from 'ramda'

const visibilityFilterHandler = Handlers()

export const setVisibilityFilter = curry((text, state) => text)
visibilityFilterHandler.registerHandler(
  'SET_VISIBILITY_FILTER', setVisibilityFilter,
)

export const resetVisibilityFilter = setVisibilityFilter('SHOW_ALL')
visibilityFilterHandler.registerHandler(
  'RESET_VISIBILITY_FILTER', resetVisibilityFilter,
)

export const visibilityFilter = visibilityFilterHandler.createReducer('SHOW_ALL')

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
