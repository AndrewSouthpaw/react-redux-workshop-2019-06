import { createStore, combineReducers } from 'redux'
import { todos } from './reducer'

const reducer = combineReducers({
  todos,
})

export const store = createStore(reducer)
