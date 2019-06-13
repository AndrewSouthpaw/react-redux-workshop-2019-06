import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, combineReducers, createStore } from 'redux'
import { todosReducer, listsReducer } from './reducer'
import thunk from 'redux-thunk'
import { App } from './App.begin'
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import './lib/fakeServer'
import { chooseList, receiveLists, receiveTodos } from './actions'
import { nextListsId, nextTodoId } from './lib/helpers'
import { prop } from 'ramda'

const reducer = combineReducers({
  todos: todosReducer,
  lists: listsReducer,
})
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

const todos = [
  { id: nextTodoId(), text: 'Write some code', completed: false },
  { id: nextTodoId(), text: 'Learn some stuff', completed: false },
  { id: nextTodoId(), text: 'Squash some bugs', completed: false },
  { id: nextTodoId(), text: 'Make dinner', completed: false },
  { id: nextTodoId(), text: 'Dance 🕺', completed: false },
]

const lists = [
  { id: nextListsId(), name: 'Work', todoIds: todos.slice(0, 3).map(prop('id')) },
  { id: nextListsId(), name: 'Home', todoIds: todos.slice(3).map(prop('id')) }
]

store.dispatch(chooseList(lists[0].id))
store.dispatch(receiveLists(lists))
store.dispatch(receiveTodos(todos))


const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(app, document.getElementById('root'))
