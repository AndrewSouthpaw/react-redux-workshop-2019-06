import { toggleTodo } from '../App.begin'

describe('#toggleTodo', () => {
  it('should flip a completed property on the state', () => {
    const state = {
      todosById: {
        1: { id: 1, completed: false },
        2: { id: 2, completed: false },
      },
      ids: [1, 2],
    }
    expect(toggleTodo(2, state)).toEqual({
      todosById: {
        1: { id: 1, completed: false },
      },
      ids: [1],
    })
  })
})
