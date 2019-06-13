import { nextTodoId } from '../../lib/helpers'
import { addTodo } from '../../actions'

export const chooseList = (id) =>
  ({ type: 'CHOOSE_LIST', id })
export const addList = (name) =>
  ({ type: 'ADD_LIST', name })
export const receiveLists = (lists) =>
  ({ type: 'RECEIVE_LISTS', lists })
export const _addTodoToList = (listId, todoId) =>
  ({ type: 'ADD_TODO_TO_LIST', listId, todoId })
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()
export const action = () => ()

export const addTodoToList = (listId, text) => (
  (dispatch, getState) => {
    const todo = { id: nextTodoId(), text, completed: false }
    dispatch(addTodo(todo))
    dispatch(_addTodoToList(listId, todo.id))
  }
)
