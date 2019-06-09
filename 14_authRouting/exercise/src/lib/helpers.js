import React from 'react'
import { mount } from 'enzyme'
import { curry } from 'ramda'

export const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

export const setupMount = (Component, defaultPropsFn) => (props) => (
  mount(<Component {...defaultPropsFn()} {...props} />)
)

export const sel = curry((dataTestId, wrapper) => wrapper.find(`[data-test-id="${dataTestId}"]`))

/**
 * Workaround for broken `findWhere` behavior for mounted components when searching by text
 * https://github.com/airbnb/enzyme/issues/1566
 */
const textContent = (node) => {
  try {
    // enzyme sometimes blows up on text()
    return node.text()
  } catch (_e) {
    return ''
  }
}

// useful for finding a node by its text
export const findByText = (text, wrapper, options = {}) => {
  const comparator = options.exact ? x => textContent(x) === text : x => new RegExp(text).test(textContent(x))
  return wrapper.findWhere(comparator).filterWhere(x => x.html().startsWith('<')).last()
}

export const fakeAuth = {
  isAuthenticated: false,
  async authenticate() {
    this.isAuthenticated = true
    await sleep(250)
  },
  async signOut() {
    this.isAuthenticated = false
    await sleep(250)
  },
}

export const fakeAuthV2Async = {
  _isAuthenticated: false,
  async isAuthenticated() {
    await sleep(150)
    return this._isAuthenticated
  },
  async authenticate() {
    this._isAuthenticated = true
    await sleep(250)
  },
  async signOut() {
    this._isAuthenticated = false
    await sleep(250)
  },
}
