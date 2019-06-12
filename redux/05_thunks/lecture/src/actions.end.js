import { saveTodoToServer } from './lib/fakeServer'

export const addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (index) =>
  ({ type: 'TOGGLE_TODO', index })

//////////////////
// thunks
//////////////////

export const saveTodoAndAddToState = (text) => (
  async (dispatch, getState) => {
    const { data: todo } = await saveTodoToServer(text)
    dispatch(addTodo(todo))
    console.log('new todos length', getState().todos.length)
  }
)
