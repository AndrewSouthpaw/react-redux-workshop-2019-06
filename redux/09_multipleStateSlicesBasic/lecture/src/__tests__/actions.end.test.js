import axios from 'axios'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { _addTodo, addTodo } from '../actions.end'
import MockAdapter from 'axios-mock-adapter'
import { newPreferencesState, newTodo, newTodosState } from '../factories.end'

const mockAxios = new MockAdapter(axios)

const createMockStore = configureStore([thunk])

describe('todos', () => {
  describe('#addTodo', () => {
    it('should normally add a todo', () => {
      const store = createMockStore({
        todos: newTodosState(),
        preferences: newPreferencesState(),
      })
      store.dispatch(addTodo('yo'))
      expect(store.getActions()).toEqual([
        _addTodo('yo')
      ])
    })

    it('should block adding a todo when max is exceeded', () => {
      const store = createMockStore({
        todos: newTodosState({ 1: newTodo(1) }),
        preferences: newPreferencesState({ maxTodos: 1 }),
      })

      expect(() => store.dispatch(addTodo('should fail'))).toThrow('Exceeded max todos')

      expect(store.getActions()).toEqual([])
    })
  })
})
