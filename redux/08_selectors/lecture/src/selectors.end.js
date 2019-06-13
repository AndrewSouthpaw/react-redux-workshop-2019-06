import { values } from 'ramda'

// state => todos slice
export const getTodos = (state) => values(state.byId)
export const getTodo = curry((id, state) => state.byId[id])
export const getTodoNumber42 = getTodo(42)
