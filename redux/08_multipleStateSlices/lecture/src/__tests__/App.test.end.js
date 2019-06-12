import React from 'react'
import { combineReducers } from 'redux'
import { listsReducer, todosReducer } from '../reducer.end'
import { Provider } from 'react-redux'
import { App } from '../App.end'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { mount } from 'enzyme'
import { findByText, sel } from '../lib/helpers'
import { newListsState, newTodosState } from '../factories'

const mockStore = configureStore([thunk])

describe('App', () => {
  const newListInput = sel('dt-list-input')
  const newTodoInput = sel('dt-todo-input')

  it('should load todos from the server and display a loading UI', async () => {
    const store = mockStore({
      todos: newTodosState(),
      lists: newListsState(),
    })
    store.replaceReducer(combineReducers({ todos: todosReducer, lists: listsReducer }))
    const w = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    newListInput(w).simulate('change', { target: { value: 'Redux' } })
    newListInput(w).simulate('submit')
    expect(w.text()).toMatch('Redux')
    findByText('Redux', w).simulate('click')
    expect(w.text()).toMatch('Add some todos')
    newTodoInput(w).simulate('change', { target: { value: 'Learn about reducers' } })
    newTodoInput(w).simulate('submit')
    newTodoInput(w).simulate('change', { target: { value: 'Learn about actions' } })
    newTodoInput(w).simulate('submit')
    expect(w.text()).toMatch(
      'Learn about reducers' +
      'Learn about actions'
    )
    newListInput(w).simulate('change', { target: { value: 'React' } })
    newListInput(w).simulate('submit')
    expect(w.text()).toMatch(
      'Learn about reducers' +
      'Learn about actions'
    )
    findByText('React', w).simulate('click')
    expect(w.text()).toMatch('Add some todos')
  })
})
