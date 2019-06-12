import { reducer } from '../reducer.end'

describe('todos reducer', () => {
  it('should be able to add a long todo', () => {
    let state
    state = reducer(
      [{ id: 0, text: 'asdv', completed: false }],
      {
        type: 'ADD_TODO',
        text: 'awefawefadwf',
      },
    )
    expect(state).toEqual(
      [
        { id: 0, text: 'asdv', completed: false },
        { id: 1, text: 'awefawefadwf', completed: false },
      ],
    )
  })

  it('should be able to uncheck a checked todo', () => {
    let state
    state = reducer(
      [
        { text: 'asdv', completed: true },
        { id: 2, text: 'awefa', completed: false },
      ],
      { type: 'TOGGLE_TODO', index: 0 },
    )
    expect(state).toEqual([
      { text: 'asdv', completed: false },
      { id: 2, text: 'awefa', completed: false },
    ])
  })
})
