import { store } from '../index.end.lecture'

describe('store', () => {
  it('#getState should return the state', () => {
    expect(store.getState()).toEqual({ todos: [] })
  })

  it('#dispatch should send action objects to reducers', () => {
    const action = { type: 'ADD_TODO', text: 'Foo' }
    store.dispatch(action)
    expect(store.getState()).toEqual({
      todos: [{ text: 'Foo', completed: false }],
    })

    const action2 = { type: 'TOGGLE_TODO', index: 0 }
    store.dispatch(action2)
    expect(store.getState()).toEqual({
      todos: [{ text: 'Foo', completed: true }],
    })
  })
})
