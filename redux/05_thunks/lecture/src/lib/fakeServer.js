import { nextId } from './nextId'

const PROBABILITY_OF_SERVER_FAILURE = 0.25

const simulateServerFailure = (data) => {
  if (Math.random() < PROBABILITY_OF_SERVER_FAILURE) {
    return Promise.reject('Could not talk to server, try again later. 🤷‍♂️')
  } else {
    return Promise.resolve(data)
  }
}

export const saveTodoToServer = (todo) => {
  simulateServerFailure({ data: { id: nextId(), text: todo, completed: false } })
}
