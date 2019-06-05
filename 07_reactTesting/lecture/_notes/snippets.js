// goes in setupTests.js
import axios from 'axios'
import MockAxios from 'axios-mock-adapter'
const axiosMock = new MockAxios(axios)


/**
 w.instance().handleChange({ target: { value: 'test 1' } })
 w.instance().addTodo({ preventDefault: jest.fn() })
 w.instance().handleChange({ target: { value: 'test 2' } })
 w.instance().addTodo({ preventDefault: jest.fn() })
 */
