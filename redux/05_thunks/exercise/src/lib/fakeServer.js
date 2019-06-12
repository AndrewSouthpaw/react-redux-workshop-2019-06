const PROBABILITY_OF_SERVER_FAILURE = 0.1

export const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

let id = 0

export const nextId = () => id++

const simulateServerFailure = async (data) => {
  await sleep(1000)
  if (Math.random() < PROBABILITY_OF_SERVER_FAILURE) {
    return Promise.reject('Could not talk to server, try again later. 🤷‍♂️')
  } else {
    return Promise.resolve(data)
  }
}

export const getTodosFromServerAsync = () => {
  return simulateServerFailure({
    data: [
      { id: nextId(), text: 'Learn about fetching data' },
      { id: nextId(), text: 'Discover async' },
      { id: nextId(), text: '???' },
      { id: nextId(), text: 'Profit' },
    ],
  })
}

export const saveTodoToServer = (todo) => {
  return simulateServerFailure({ data: { id: nextId(), text: todo, completed: false } })
}
