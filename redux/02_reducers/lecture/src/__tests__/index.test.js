import { todos } from '../index'

describe('Better reducers', () => {
  def('initialState', () => [
    { text: 'Eat food', completed: true },
    { text: 'Exercise', completed: false },
  ])

  describe('todos', () => {
    it('#addTodo should add a todo', () => {
      const { initialState } = lets
      const res = todos(initialState, { type: 'ADD_TODO', text: 'foo' })
      expect(res).toEqual([
        { text: 'Eat food', completed: true },
        { text: 'Exercise', completed: false },
        { text: 'foo', completed: false },
      ])
    })

    it('#toggleTodo should flip completed state', () => {
      const { initialState } = lets
      const res = todos(initialState, { type: 'TOGGLE_TODO', index: 1 })
      expect(res).toEqual([
        { text: 'Eat food', completed: true },
        { text: 'Exercise', completed: true },
      ])

      const res2 = todos(res, { type: 'TOGGLE_TODO', index: 1 })
      expect(res2).toEqual([
        { text: 'Eat food', completed: true },
        { text: 'Exercise', completed: false },
      ])
    })
  })
})
