
import axios from 'axios'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addAndSaveTodoAsync, addTodo } from '../actions'
import MockAdapter from 'axios-mock-adapter'

const mockAxios = new MockAdapter(axios)

const mockStore = configureStore([thunk])

describe('actions', () => {
  describe('#addAndSaveTodoAsync', () => {
    it('should talk to the server and then save the todo to state', async () => {
      mockAxios.onPost().reply(200, { id: 1, text: 'foo', completed: false })
      const store = mockStore([])
      await store.dispatch(addAndSaveTodoAsync('foo'))
      expect(store.getActions()).toEqual([
        addTodo({ id: 1, text: 'foo', completed: false })
      ])
      expect(mockAxios.history.post[0].url).toEqual('/todos')
      expect(mockAxios.history.post[0].data).toEqual(JSON.stringify({ text: 'foo' }))
    })
  })
})
