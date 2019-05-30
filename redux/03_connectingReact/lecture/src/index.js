import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { reducer as todosReducer } from './reducer'
import { App } from './App.begin'
// import { App } from './App.end.v1'
// import { App } from './App.end.v2'

const reducer = combineReducers({
  todos: todosReducer,
})
export const store = createStore(reducer)

ReactDOM.render(<App />, document.getElementById('root'))
