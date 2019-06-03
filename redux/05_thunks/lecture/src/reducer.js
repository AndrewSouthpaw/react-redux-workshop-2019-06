import { Handlers } from './lib/handlers'
import { nextId } from './lib/nextId'

const { registerHandler, createReducer } = Handlers()

export const addTodo = (text, state) => state.concat([{ id: nextId(), text, completed: false }])
registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (index, state) => (
  state.map((todo, i) => (
    index === i ? { text: todo.text, completed: true } : todo
  ))
)
registerHandler('TOGGLE_TODO', toggleTodo)


export const reducer = createReducer([])
