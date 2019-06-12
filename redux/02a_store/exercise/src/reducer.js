import { createHandlers } from 'redux-handlers'

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
