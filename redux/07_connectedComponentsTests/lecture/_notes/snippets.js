// // goes in setupTests.js
// import axios from 'axios'
// import MockAxios from 'axios-mock-adapter'
// const axiosMock = new MockAxios(axios)

import React from 'react'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { mount } from 'enzyme'

const MockStore = configureStore([thunk])
export const MockStoreRealReducer = (state) => {
  const store = MockStore(state)
  store.replaceReducer(reducer) // import from somewhere, or recreate
  return store
}

const MockStoreFactory = baseState => overrides => MockStore({ ...baseState, ...overrides })

const MockStoreRealReducerFactory = baseState => overrides => MockStoreRealReducer({ ...baseState, ...overrides })

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
