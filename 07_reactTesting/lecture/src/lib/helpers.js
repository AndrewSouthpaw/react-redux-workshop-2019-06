import { curry } from 'ramda'

export const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

export const fakeGetTodos = async () => {
  await sleep(1000)
  return { data: initialTodos }
}

export const fakeSaveTodoToServer = async (todo) => {
  await sleep(1000)
  return { data: todo }
}

export const initialTodos = [
  { id: 1, name: 'Learn about fetching data' },
  { id: 2, name: 'Discover async' },
  { id: 3, name: '???' },
  { id: 4, name: 'Profit' },
]

export const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

export const reflush = async (wrapper) => {
  await flushPromises()
  wrapper.update()
}

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
