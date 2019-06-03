import { saveTodoToServer } from './lib/fakeServer'

export const addTodo = (text) =>
  ({ type: 'ADD_TODO', text })

export const toggleTodo = (index) =>
  ({ type: 'TOGGLE_TODO', index })

// thunks

export const addAndSaveTodoAsync = (todo) => (
  async (dispatch, getState) => {
    await saveTodoToServer(todo)
    dispatch(addTodo(todo))
  }
)
