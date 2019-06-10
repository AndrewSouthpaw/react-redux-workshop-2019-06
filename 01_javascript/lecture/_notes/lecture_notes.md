
# Javascript

```js
const nextTick = () => new Promise(res => process.nextTick(res))

/**
 * A reflush that works correctly when using fake timers in jest via jest.useFakeTimers().
 * Otherwise it hangs forever because fake timers screw up promises because IDK.
 * Discussion: https://github.com/facebook/jest/pull/6876
 * Implementation: https://github.com/facebook/jest/issues/2157#issuecomment-366202533
 */
export const reflushFakeTimers = async (wrapper) => {
  await nextTick()
  wrapper.update()
}

```

```js
// challenge solution:

      const nextTick = () => new Promise(res => process.nextTick(res))
      jest.advanceTimersByTime(1000)
      await nextTick()
      jest.advanceTimersByTime(1)
      await nextTick()
```
