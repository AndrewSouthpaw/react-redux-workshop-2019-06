import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { reducer as todosReducer } from './reducer'
import thunk from 'redux-thunk'
import { App } from './App.begin'
// import { App } from './App.end'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// stub server behavior
import './lib/fakeServer'

const reducer = combineReducers({
  todos: todosReducer,
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
