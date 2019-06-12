export const addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (index) =>
  ({ type: 'TOGGLE_TODO', index })

// thunks

export const getTodosFromServerAsync = () => { /* */ }

export const addAndSaveTodoAsync = (text) => (
  async (dispatch, getState) => {
    /**
     * use `saveTodoToServer` to talk to server and save the todo, and then store the object returned from the
     * server call into the Redux state.
     */
  }
)
