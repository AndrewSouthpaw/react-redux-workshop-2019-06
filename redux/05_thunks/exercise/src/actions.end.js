import { getTodosFromServerAsync as getTodos, saveTodoToServer } from './lib/fakeServer'

export const receiveTodos = (todos) =>
  ({ type: 'RECEIVE_TODOS', todos })

export const addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (index) =>
  ({ type: 'TOGGLE_TODO', index })

// thunks

export const getTodosFromServerAsync = () => (
  async (dispatch, getState) => {
    const { data } = await getTodos()
    dispatch(receiveTodos(data))
  }
)

export const addAndSaveTodoAsync = (text) => (
  async (dispatch, getState) => {
    const todo = (await saveTodoToServer(text)).data
    dispatch(addTodo(todo))
  }
)
