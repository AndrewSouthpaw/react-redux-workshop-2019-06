import React from 'react'
import axios from 'axios'
import { combineReducers } from 'redux'
import { reducer as todosReducer } from '../reducer'
import { Provider } from 'react-redux'
import { _App, App } from '../App.begin'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { shallow, mount } from 'enzyme'
import MockAxios from 'axios-mock-adapter'
import { reflush, sel } from '../lib/helpers'

const mockStore = configureStore([thunk])

const axiosMock = new MockAxios(axios)

describe('App', () => {
  it('should still pass in shallow even though behavior is broken', async () => {
    const w = shallow(<_App todos={[{ id: 1, text: 'yo' }]} dispatch={jest.fn().mockResolvedValue()} />)
    await reflush(w)
    expect(sel('todos', w).length).toEqual(1)
    expect(sel('todos', w).childAt(0).props().text).toEqual('yo')
  })

  it('should load todos from the server and display a loading UI', async () => {
    const store = mockStore({
      todos: [],
    })
    store.replaceReducer(combineReducers({ todos: todosReducer }))
    const w = mount(
      <Provider store={store}>
        <App />
      </Provider>,
    )
    axiosMock.onGet('/todos').reply(200, [{ id: 1, text: 'foo', completed: false }])
    expect(w.text()).toMatch('Loading...')
    expect(w.text()).not.toMatch('foo')
    await reflush(w)
    expect(sel('todos', w).length).toEqual(1)
    expect(w.text()).not.toMatch('Loading...')
    expect(w.text()).toMatch('foo')
  })
})
