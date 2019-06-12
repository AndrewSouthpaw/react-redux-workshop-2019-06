import { store } from '../index.end'

describe('store', () => {
  it('should work', () => {
    expect(store.getState()).toEqual({ todos: [] })

    const action = { type: 'ADD_TODO', text: 'hello' }
    store.dispatch(action)

    expect(store.getState()).toEqual({
      todos: [{ text: 'hello', completed: false }],
    })
  })
})
