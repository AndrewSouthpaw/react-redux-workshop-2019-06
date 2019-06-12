import { receiveTodos } from '../reducer.end'

describe('todos reducer', () => {
  it('#receiveTodos should work', () => {
    const state = []
    const todos = [
      { id: 1, text: 'foo' },
      { id: 2, text: 'bar' },
    ]
    const newState = receiveTodos(todos, state)
    expect(newState).toEqual(todos)
  })
})
