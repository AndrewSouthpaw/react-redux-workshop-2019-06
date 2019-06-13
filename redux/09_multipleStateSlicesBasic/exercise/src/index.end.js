import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { todosReducer, userReducer } from './reducer'
import thunk from 'redux-thunk'
import { App } from './App.begin'
// import { App } from './App.end'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './lib/fakeServer'
import { receiveTodos } from './actions'
import { nextTodoId } from './lib/helpers'

const reducer = combineReducers({
  todos: todosReducer,
  user: userReducer,
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const todos = [
  { id: nextTodoId(), text: 'Write some code', completed: false },
  { id: nextTodoId(), text: 'Learn some stuff', completed: false },
  { id: nextTodoId(), text: 'Squash some bugs', completed: false },
]

store.dispatch(receiveTodos(todos))

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
