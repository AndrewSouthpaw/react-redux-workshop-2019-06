// user
export const logIn = () =>
  ({ type: 'LOG_IN' })

export const logOut = () =>
  ({ type: 'LOG_OUT' })

// todos
export const receiveTodos = (todos) =>
  ({ type: 'RECEIVE_TODOS', todos })

export const _addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (id) =>
  ({ type: 'TOGGLE_TODO', id })

export const addTodo = (todo) => (
  (dispatch, getState) => {
    const state = getState()
    if (!state.user) {
      throw new Error('not logged in')
    }
    dispatch(_addTodo(todo))
  }
)
