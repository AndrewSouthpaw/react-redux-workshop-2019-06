import React from 'react'
import { configure, shallow, mount } from 'enzyme'
import { App } from '../App.end'
import Adapter from 'enzyme-adapter-react-16'
import { findByText, sel } from '../lib/helpers'

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

  describe('write some mount tests that actually catch the bugs', () => {
    const getAddTodo = sel('add-todo')
    const getTodos = sel('todos')

    it('should handle changes', () => {
      const w = mount(<App />)
      getAddTodo(w).simulate('change', { target: { value: 'test 1' } })
      findByText('Add Todo', w).simulate('submit')
      expect(w.text()).toMatch('test 1')
    })

    it('should remove a todo on click', () => {
      const w = mount(<App />)
      getAddTodo(w).simulate('change', { target: { value: 'test 1' } })
      findByText('Add Todo', w).simulate('submit')
      expect(w.text()).toMatch('test 1')
      getTodos(w).find('[type="checkbox"]').simulate('change')
      expect(w.text()).not.toMatch('test 1')
    })
  })
})
