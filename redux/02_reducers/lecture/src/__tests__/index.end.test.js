import { addTodo, toggleTodo } from '../index.end'

describe('Better reducers', () => {
  def('initialState', () => [
    { text: 'Eat food', completed: true },
    { text: 'Exercise', completed: false },
  ])

  describe('todos', () => {
    it('#addTodo should add a todo', () => {
      const { initialState } = lets
      expect(addTodo('foo', initialState)).toEqual([
        { text: 'Eat food', completed: true },
        { text: 'Exercise', completed: false },
        { text: 'foo', completed: false },
      ])
    })

    it('#toggleTodo should flip completed state', () => {
      const { initialState } = lets
      const res = toggleTodo(1, initialState)
      expect(res).toEqual([
        { text: 'Eat food', completed: true },
        { text: 'Exercise', completed: true },
      ])

      const res2 = toggleTodo(1, res)
      expect(res2).toEqual([
        { text: 'Eat food', completed: true },
        { text: 'Exercise', completed: false },
      ])
    })
  })
})
