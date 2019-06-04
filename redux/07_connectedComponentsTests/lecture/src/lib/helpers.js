import { curry } from 'ramda'

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
