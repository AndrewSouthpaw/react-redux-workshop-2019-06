import { reducer } from '../reducer.end'

describe('#reducer', () => {
  it('should work with a longer todo', () => {
    let state
    state = reducer(
      [{ id: 0, text: 'asdf', completed: false }],
      {
        type: 'ADD_TODO',
        text: 'sdvlaksjdlakjweflk',
      },
    )
    expect(state).toEqual(
      [
        { id: 0, text: 'asdf', completed: false },
        { id: 1, text: 'sdvlaksjdlakjweflk', completed: false },
      ],
    )
  })
})


