import { nextId } from './nextId'

export const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

const PROBABILITY_OF_SERVER_FAILURE = 0.25

const simulateServerFailure = async (data) => {
  await sleep(1000)
  if (Math.random() < PROBABILITY_OF_SERVER_FAILURE) {
    return Promise.reject('Could not talk to server, try again later. 🤷‍♂️')
  } else {
    return Promise.resolve(data)
  }
}

export const saveTodoToServer = (todo) => {
  return simulateServerFailure({ data: { id: nextId(), text: todo, completed: false } })
}
