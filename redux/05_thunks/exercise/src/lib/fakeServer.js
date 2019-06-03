let id = 5

export const nextId = () => id++

const todos = [
  { id: 1, text: 'Learn about fetching data' },
  { id: 2, text: 'Discover async' },
  { id: 3, text: '???' },
  { id: 4, text: 'Profit' },
]

export const getTodosFromServer = () => {
  if (Math.random() < 0.9) {
    return Promise.reject('Could not talk to server, try again later. 🤷‍♂️')
  } else {
    return Promise.resolve({ data: todos })
  }
}

export const saveTodoToServer = (todo) => {
  if (Math.random() < 0.9) {
    return Promise.reject('Could not talk to server, try again later. 🤷‍♂️')
  } else {
    return Promise.resolve({ id: nextId(), text: todo, completed: false })
  }
}
