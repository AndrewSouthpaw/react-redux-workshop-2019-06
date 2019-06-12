
import axios from 'axios'
import MockAdapter from 'axios-mock-adapter'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { addAndSaveTodoAsync, addTodo, getTodosFromServerAsync, receiveTodos } from '../actions'

const mockAxios = new MockAdapter(axios)
const createMockStore = configureStore([thunk])

describe('actions', () => {
  it('#getTodosFromServerAsync should get todos', async () => {
    // data
    const todos = [{ id: 1, text: 'foo' }, { id: 2, text: 'bar' }]
    // mock server
    mockAxios.onGet('/todos').reply(200, todos)
    // create a store
    const store = createMockStore({
      todos: [],
    })

    await store.dispatch(getTodosFromServerAsync())

    // make assertions
    expect(store.getActions()).toEqual([
      receiveTodos(todos),
    ])

    expect(mockAxios.history.get[0].url).toEqual(
      '/todos'
    )
  })

  it('#addAndSaveTodoAsync saves and adds todo to state', async () => {
    // mock server
    const todo = { id: 1, text: 'yay 🎉' }
    mockAxios.onPost('/todos').reply(200, todo)
    // create a store
    const store = createMockStore({
      todos: [],
    })

    await store.dispatch(addAndSaveTodoAsync('foo'))

    // make assertions
    expect(store.getActions()).toEqual([
      addTodo(todo),
    ])

    expect(mockAxios.history.post[0].url).toEqual(
      '/todos'
    )
    expect(mockAxios.history.post[0].data).toEqual(
      JSON.stringify({ text: 'foo' })
    )
  })
})
