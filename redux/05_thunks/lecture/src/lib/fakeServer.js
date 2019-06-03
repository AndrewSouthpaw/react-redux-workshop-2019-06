
export const saveTodoToServer = (todo) => {
  if (Math.random() < 0.9) {
    return Promise.reject('Could not talk to server, try again later. 🤷‍♂️')
  } else {
    return Promise.resolve()
  }
}
