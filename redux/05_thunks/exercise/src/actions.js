import { saveTodoToServer } from './lib/fakeServer'

export const addTodo = (text) =>
  ({ type: 'ADD_TODO', text })

export const toggleTodo = (index) =>
  ({ type: 'TOGGLE_TODO', index })

// thunks

export const addAndSaveTodoAsync = (text) => (
  async (dispatch, getState) => {
    /**
     * use `saveTodoToServer` to talk to server and save the todo, and then store the returned object in state.
     * Add error handling when the server call fails.
     */
  }
)
