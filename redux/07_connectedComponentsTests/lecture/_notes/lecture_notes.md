# Testing Connected Components

- Show mounting something with a Provider
- Write test for displaying UI behavior
- Start with `shallow` test and show how tests can pass without having correct behavior
- Demonstrate challenges with awaiting promises
- Create a helper `mountWithRedux`
- Show why you can't pass in props directly for easier testing
- Create a `FakeProvider` helper
- Talk about using `this.props.dispatch` vs. object shorthand and implications with testing
- Stubbing a specific action
  - Mocking the entire actions file
  - babel-rewire plugin
  - basic stub thunk
  
```js
actions._stubThunk = (thunk) => {
  const original = module.exports[thunk]
  beforeEach(() => {
    module.exports[thunk] = (result = Promise.resolve()) => (() => { return result })
  })

  afterEach(() => {
    module.exports[thunk] = original
  })
}
```

  - can track calls
  
```js
actions._stubThunk = (thunk, result = Promise.resolve()) => {
  const original = module.exports[thunk]
  beforeEach(() => {
    module.exports[thunk] = jest.fn(() => () => result)
  })

  afterEach(() => {
    module.exports[thunk] = original
  })
}
```

  - can log and replace thunk with other mock behavior

```js
actions._stubThunk = (thunk, result = Promise.resolve(), { log = false } = {}) => {
  const original = module.exports[thunk]
  beforeEach(() => {
    module.exports[thunk] = jest.fn((...args) => (dispatch, getState) => {
      if (log) { dispatch({ type: `${thunk}ThunkStub`, args }) }
      if (typeof result === 'function') return result(dispatch, getState)
      return result
    })
  })

  afterEach(() => {
    module.exports[thunk] = original
  })
}
```

  - can extract to separate lib helper for repeatability

```js
export const stubThunk = (exports) => (thunk, result = Promise.resolve(), { log = false } = {}) => {
  console.log('exports', exports)
  const original = exports[thunk]
  beforeEach(() => {
    exports[thunk] = jest.fn((...args) => (dispatch, getState) => {
      if (log) { dispatch({ type: `${thunk}ThunkStub`, args }) }
      if (typeof result === 'function') return result(dispatch, getState)
      return result
    })
  })

  afterEach(() => {
    exports[thunk] = original
  })
}

// __mocks__/actions.js
module.exports = require.requireActual('../actions')
actions._stubThunk = require('../lib/stubThunk').stubThunk(module.exports)
```
