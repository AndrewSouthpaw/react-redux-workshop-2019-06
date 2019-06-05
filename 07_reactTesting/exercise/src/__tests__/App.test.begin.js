import React from 'react'
import { configure, shallow } from 'enzyme'
import { App } from '../App.begin'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

describe('App', () => {
  describe('shallow test are deceptive', () => {
    it('should handle changes from Todo input', () => {
      const w = shallow(<App />)
      w.setState({ todo: 'test 1' })
      w.instance().addTodo({ preventDefault: jest.fn() })
      w.setState({ todo: 'test 2' })
      w.instance().addTodo({ preventDefault: jest.fn() })
      expect(w.find('Todo').at(0).props().name).toEqual('test 1')
      expect(w.find('Todo').at(1).props().name).toEqual('test 2')
      w.instance().completeTodo(w.find('Todo').at(0).props().id)
      expect(w.find('Todo').length).toEqual(1)
    })
  })

  describe('write some mount tests that actually catch the bugs', () => {})
})
