import axios from 'axios'

export const receiveTodos = (todos) =>
  ({ type: 'RECEIVE_TODOS', todos })

export const addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (index) =>
  ({ type: 'TOGGLE_TODO', index })

// thunks

export const getTodosFromServerAsync = () => (
  async (dispatch, getState) => {
    const { data } = await axios.get('/todos')
    dispatch(receiveTodos(data))
  }
)

export const addAndSaveTodoAsync = (text) => (
  async (dispatch, getState) => {
    const { data } = await axios.post('/todos', { text })
    dispatch(addTodo(data))
  }
)

export const doComplicatedThing = () => (
  (dispatch, getState) => {
    const message = 'You cannot handle how complicated this is! 😱'
    alert(message)
    throw new Error(message)
  }
)
