import axios from 'axios'
import { sleep } from './lib/helpers'

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
