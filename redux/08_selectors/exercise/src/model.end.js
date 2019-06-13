/**
 * Model
 *
 * 1. Usually doesn't take state
 * 2. Can involve creating new things
 * 3. Repeated code that you don't necessarily need in other state slices yet
 */

import { not, evolve } from 'ramda'

export const temporaryStoreNewTodo = (todo) => {
  try {
    window.localStorage.setItem(todo.id, todo)
  } catch (e) {

  }
}

export const flipCompletedFlag = (todo, state) => evolve({ completed: not }, todo)
