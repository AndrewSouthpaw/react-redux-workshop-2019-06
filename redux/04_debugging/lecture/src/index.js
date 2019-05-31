import React from 'react'
import ReactDOM from 'react-dom'
import { combineReducers, createStore } from 'redux'
import { reducer as todosReducer } from './reducer'
import { App } from './App'
// import { composeWithDevTools } from 'redux-devtools-extension'
import { Provider } from 'react-redux'

const reducer = combineReducers({
  todos: todosReducer,
})
export const store = createStore(reducer)
// export const store = createStore(reducer, composeWithDevTools())

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))

