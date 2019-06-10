import { diff, setupState } from '../lib/helpers'
import { toggleTodo } from '../reducer'

describe('todos reducer', () => {
  it('#toggleTodo should toggle completed state', () => {
    const [s0, s1, s2] = setupState({ 1: { text: '1', completed: false }, 2: { text: '2', completed: false } },
      x => toggleTodo(1, x),
      x => toggleTodo(1, x),
    )
    expect(diff(s0, s1)).toEqual({ 1: { text: '1', completed: true } })
    expect(diff(s1, s2)).toEqual({ 1: { text: '1', completed: false } })
  })
})
