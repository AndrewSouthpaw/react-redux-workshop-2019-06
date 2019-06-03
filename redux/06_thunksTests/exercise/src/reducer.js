import { Handlers } from './lib/handlers'

const { registerHandler, createReducer } = Handlers()

export const receiveTodos = (todos, state) => todos

export const addTodo = (todo, state) => state.concat([todo])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => (
  state.map((todo, i) => (
    index === i ? { text: todo.text, completed: true } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)


export const reducer = createReducer([])
