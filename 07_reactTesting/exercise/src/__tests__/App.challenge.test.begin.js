import React from 'react'
import { configure, shallow } from 'enzyme'
import { App } from '../App.challenge.begin'
import Adapter from 'enzyme-adapter-react-16'
import { reflush } from '../lib/helpers'
import { saveTodoAsync } from '../lib/server'

configure({ adapter: new Adapter() })

jest.mock('../lib/server', () => ({ saveTodoAsync: jest.fn().mockResolvedValue() }))

describe('App', () => {
  describe('shallow test are deceptive', () => {
    it('should handle changes from Todo input', async () => {
      const w = shallow(<App />)
      w.setState({ todo: 'test 1' })
      w.instance().addTodo({ preventDefault: jest.fn() })
      await reflush(w)
      expect(w.find('Todo').length).toEqual(1)
      expect(saveTodoAsync.mock.calls).toEqual([[{ id: expect.anything(), name: 'test 1' }]])
    })
  })

  describe('write some mount tests that actually catch the bugs', () => {})
})
