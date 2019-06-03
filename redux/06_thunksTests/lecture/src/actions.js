import { saveTodoToServer } from './lib/server'

export const addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (index) =>
  ({ type: 'TOGGLE_TODO', index })

// thunks

export const addAndSaveTodoAsync = (text) => (
  async (dispatch, getState) => {
    const todo = await saveTodoToServer(text)
    dispatch(addTodo(todo))
  }
)
