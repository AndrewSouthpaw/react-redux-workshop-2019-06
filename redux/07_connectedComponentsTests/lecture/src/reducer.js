import { Handlers } from './lib/handlers'

const { registerHandler, createReducer } = Handlers()

export const receiveTodos = (todos, state) => todos
registerHandler('RECEIVE_TODOS', receiveTodos)

export const addTodo = (todo, state) => state.concat([todo])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => (
  state.map((todo, i) => (
    index === i ? { ...todo, completed: !todo.completed } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)


export const reducer = createReducer([])
