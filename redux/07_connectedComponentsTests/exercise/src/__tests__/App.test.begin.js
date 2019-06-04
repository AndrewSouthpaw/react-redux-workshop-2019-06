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
import { MockStoreFactory, reflush, sel } from '../lib/helpers'

const mockStore = configureStore([thunk])

const axiosMock = new MockAxios(axios)

axiosMock.onGet('/todos').reply(200, [{ id: 1, text: 'Test item' }])
axiosMock.onPost('/todos').reply(200, { id: 5, text: 'New item', completed: false })

describe('App', () => {
  describe('shallow does not catch bugs', () => {
    const newStore = MockStoreFactory({ todos: [] })

    it('should show loading initially, and then go away', async () => {
      const store = newStore()
      const w = shallow(<_App todos={[{ id: 1, text: 'yo' }]} dispatch={store.dispatch} />)
      expect(w.text()).toMatch('Loading...')
      await reflush(w)
      expect(w.text()).not.toMatch('Loading...')
    })

    it('should show todos once they are loaded', async () => {
      const store = newStore()
      const w = shallow(<_App todos={[{ id: 1, text: 'yo' }]} dispatch={store.dispatch} />)
      await reflush(w)
      w.setProps({ todos: [{ id: 1, text: 'foo' }] })
      expect(sel('todos', w).length).toEqual(1)
      expect(sel('todos', w).childAt(0).props().text).toEqual('foo')
    })

    it('should add a todo', async () => {
      const store = newStore()
      const w = shallow(<_App todos={[{ id: 1, text: 'yo' }]} dispatch={store.dispatch} />)
      w.setState({ todo: 'bar' })
      w.instance().addTodo({ preventDefault: jest.fn() })
      expect(store.getActions()).toEqual([{ type: 'ADD_TODO', todo: 'bar' }])
    })

    it('should be able to mark a todo as complete', () => {
      const store = newStore()
      const w = shallow(<_App todos={[{ id: 1, text: 'yo' }]} dispatch={store.dispatch} />)
      w.instance().handleTodoCheck(0)
      expect(store.getActions()).toEqual([{ type: 'TOGGLE_TODO', index: 0 }])
    })
  })

  describe('mount will catch the bugs', () => {
    it('should save the todo to the server and then update the list of todos', () => {})

    it('should correctly mark a todo as completed with a line through it', () => {})
  })
})
