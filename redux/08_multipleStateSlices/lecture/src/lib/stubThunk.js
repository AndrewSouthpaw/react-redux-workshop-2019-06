export const stubThunk = (exports) => (
  (thunk, result = Promise.resolve(), { log = false } = {}) => {
    const original = exports[thunk]

    // setup thunk stub
    beforeEach(() => {
      exports[thunk] = jest.fn((...args) => (dispatch, getState) => {
        if (log) { dispatch({ type: `${thunk}ThunkStub`, args }) }
        if (typeof result === 'function') return result(dispatch, getState)
        return result
      })
    })

    // cleanup
    afterEach(() => {
      exports[thunk] = original
    })
  }
)
