import { decrementMaxTodos, incrementMaxTodos } from '../reducer'

describe('preferences', () => {
  describe('#incrementMaxTodos', () => {
    it('should work', () => {
      const state = { maxTodos: 5 }
      expect(incrementMaxTodos(state)).toEqual({ maxTodos: 6 })
    })
  })

  describe('#decrementMaxTodos', () => {
    it('should work', () => {
      const state = { maxTodos: 5 }
      expect(decrementMaxTodos(state)).toEqual({ maxTodos: 4 })
    })
  })
})
