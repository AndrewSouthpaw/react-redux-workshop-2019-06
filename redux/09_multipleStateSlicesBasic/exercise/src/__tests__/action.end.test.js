
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { newTodosState } from '../factories'
import { addTodo } from '../actions'

const createMockStore = configureStore([thunk])

describe('todos', () => {
  describe('#addTodo', () => {
    it('should complain when user is not logged in', () => {
      const store = createMockStore({
        todos: newTodosState(),
        user: null,
      })
      expect(() => {
        store.dispatch(addTodo('foo'))
      })
        .toThrow('not logged in')
    })
  })
})
