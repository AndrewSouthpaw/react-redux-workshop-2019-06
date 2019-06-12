import MockAdapter from 'axios-mock-adapter'
import axios from 'axios'

if (process.env.NODE_ENV === 'development') {
  const mockAxios = new MockAdapter(axios)
  const todos = [{ id: 1, text: 'foo' }, { id: 2, text: 'bar' }]
  // mock server
  mockAxios.onGet('/todos').reply(200, todos)
}
