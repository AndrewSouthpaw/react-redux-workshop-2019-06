export const sleep = async timeInMs => new Promise(res => setTimeout(res, timeInMs))

export const fakeGetTodos = async () => {
  await sleep(1000)
  return { data: initialTodos }
}

export const fakeSaveTodoToServer = async (todo) => {
  await sleep(1000)
  return { data: todo }
}

export const initialTodos = [
  { id: 1, name: 'Learn about fetching data' },
  { id: 2, name: 'Discover async' },
  { id: 3, name: '???' },
  { id: 4, name: 'Profit' },
]

export const flushPromises = () => new Promise(resolve => setTimeout(resolve, 0))

export const reflush = async (wrapper) => {
  await flushPromises()
  wrapper.update()
}
