import { logIn, logOut } from '../reducer'

describe('user state', () => {
  describe('#logIn', () => {
    it('should log the user in', () => {
      const state = null
      expect(logIn(state)).toEqual({ name: 'John Doe' })
    })
  })

  describe('#logOut', () => {
    it('should log the user out', () => {
      const state = { name: 'John Doe' }
      expect(logOut(state)).toEqual(null)
    })
  })
})
