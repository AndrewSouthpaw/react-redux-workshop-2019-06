import { values } from 'ramda'

// user
export const getUser = (state) => state

// todos
export const getTodos = (state) => values(state)
