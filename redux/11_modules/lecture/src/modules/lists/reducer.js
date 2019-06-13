import { createHandlers } from 'redux-handlers'
import { append, assoc, assocPath, evolve, indexBy, prop } from 'ramda'
import { nextListsId } from '../../lib/helpers'

const listsHandlers = createHandlers()

export const receiveLists = (lists, state) => ({ ...state, byId: indexBy(prop('id'), lists) })
listsHandlers.registerHandler('RECEIVE_LISTS', receiveLists)

export const chooseList = (id, state) => assoc('activeList', id, state)
listsHandlers.registerHandler('CHOOSE_LIST', chooseList)

export const addList = (name, state) => {
  const newList = { id: nextListsId(), name, todoIds: [] }
  return assocPath(['byId', newList.id], newList, state)
}
listsHandlers.registerHandler('ADD_LIST', addList)

export const addTodoToList = (listId, todoId, state) => (
  evolve({ byId: { [listId]: { todoIds: append(todoId) } } }, state)
)
listsHandlers.registerHandler('ADD_TODO_TO_LIST', addTodoToList)

export const reducer = listsHandlers.createReducer({})
