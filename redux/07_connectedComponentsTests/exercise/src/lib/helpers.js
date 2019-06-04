import { curry } from 'ramda'
import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

export const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

export const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

export const reflush = async (wrapper) => {
  await flushPromises()
  wrapper.update()
}

/**
 * A reflush that works correctly when using fake timers in jest via jest.useFakeTimers().
 * Otherwise it hangs forever because fake timers screw up promises because IDK.
 * Discussion: https://github.com/facebook/jest/pull/6876
 * Implementation: https://github.com/facebook/jest/issues/2157#issuecomment-366202533
 */
export const reflushFakeTimers = async (wrapper) => {
  await new Promise(res => process.nextTick(res))
  wrapper.update()
}

export const sel = curry((dataTestId, wrapper) => wrapper.find(`[data-test-id="${dataTestId}"]`))

export const MockStore = configureStore([thunk])
export const MockStoreRealReducer = (state) => {
  const store = MockStore(state)
  store.replaceReducer(reducer) // import from somewhere, or recreate
  return store
}

export const MockStoreFactory = baseState => overrides => MockStore({ ...baseState, ...overrides })

export const MockStoreRealReducerFactory = baseState => overrides => MockStoreRealReducer({ ...baseState, ...overrides })

class FakeProvider extends React.Component {
  render() {
    const { children, store, ...rest } = this.props
    return (
      <Provider store={store}>
        {React.cloneElement(children, rest)}
      </Provider>
    )
  }
}

export const setupMountWithRedux = (Component, defaultPropsFn) => (store, props) => (
  mount(
    <FakeProvider store={store}>
      <Component {...defaultPropsFn()} {...props} />
    </FakeProvider>,
  )
)

// expects components to be mounted using the FakeProvider, otherwise it walks down too many children
export const reduxComponent = (wrapper) => wrapper.childAt(0).childAt(0).childAt(0)
