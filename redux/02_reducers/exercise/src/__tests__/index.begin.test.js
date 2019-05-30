import { addTodo, toggleTodo, visibilityFilter } from '../index.begin'

describe('Better reducers', () => {
  describe('visibilityFilter', () => {
    def('s0', () => 'SHOW_ALL')

    it('#setVisibilityFilter should set to the filter', () => {
      const { s0 } = lets
      expect(visibilityFilter(s0, { type: 'SET_VISIBILITY_FILTER', filter: 'foo' })).toEqual('foo')
    })

    it('#resetVisibilityFilter should reset to beginning', () => {
      const { s0 } = lets
      expect(visibilityFilter('foo', { type: 'RESET_VISIBILITY_FILTER' })).toEqual('SHOW_ALL')
    })
  })

  describe('todos', () => {
    def('initialState', () => [
      { text: 'Eat food', completed: true },
      { text: 'Exercise', completed: false },
    ])

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
