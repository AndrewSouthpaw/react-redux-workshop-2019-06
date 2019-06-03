const PROBABILITY_OF_SERVER_FAILURE = 0.25

let id = 5

export const nextId = () => id++

const todos = [
  { id: 1, text: 'Learn about fetching data' },
  { id: 2, text: 'Discover async' },
  { id: 3, text: '???' },
  { id: 4, text: 'Profit' },
]

const simulateServerFailure = (data) => {
  if (Math.random() < PROBABILITY_OF_SERVER_FAILURE) {
    return Promise.reject('Could not talk to server, try again later. 🤷‍♂️')
  } else {
    return Promise.resolve(data)
  }
}

export const getTodosFromServer = () => {
  simulateServerFailure({ data: todos })
}

export const saveTodoToServer = (todo) => {
  simulateServerFailure({ data: { id: nextId(), text: todo, completed: false } })
}
