import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { reducer as todosReducer } from './reducer'
import { App } from './App'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const reducer = combineReducers({
  todos: todosReducer,
})
export const store = createStore(reducer, composeWithDevTools())

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
