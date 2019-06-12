
import { createStore, combineReducers } from 'redux'
import { todos } from './reducer'

const reducer = combineReducers({
  todos: todos,
})

export const store = createStore(reducer)
