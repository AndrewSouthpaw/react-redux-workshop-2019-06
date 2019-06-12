import { append, assoc, curry, equals, keys, last, reduce, union } from 'ramda'

let todoIds = 1
export const nextTodoId = () => todoIds++
let listsIds = 1
export const nextListsId = () => listsIds++

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

export const setupState = (initialState, ...actions) => (
  reduce(
    (acc, action) => append(action(last(acc)), acc),
    [initialState],
    actions,
  )
)

export const diff = (lhs, rhs) => {
  const ks = union(keys(lhs), keys(rhs))
  return reduce(
    (acc, k) => (equals(lhs[k], rhs[k]) ? acc : assoc(k, rhs[k], acc)),
    {},
    ks,
  )
}

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
  return wrapper.findWhere(comparator).filterWhere(x => (x.html() || '').startsWith('<')).last()
}
