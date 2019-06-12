import { createHandlers } from 'redux-handlers'
import { assoc, evolve, indexBy, not, prop } from 'ramda'
import { nextListsId, nextTodoId } from './lib/helpers'

// lists
const listsHandlers = createHandlers()

export const receiveLists = (lists, state) => indexBy(prop('id'), lists)
listsHandlers.registerHandler('RECEIVE_LISTS', receiveLists)

export const chooseList = (id, state) => assoc('activeList', id, state)
listsHandlers.registerHandler('CHOOSE_LIST', chooseList)

export const addList = (name, state) => {
  const newList = { id: nextListsId(), name, todoIds: [] }
  return assoc(newList.id, newList, state)
}
listsHandlers.registerHandler('ADD_LIST', addList)

export const listsReducer = listsHandlers.createReducer({})

// todos
const todosHandlers = createHandlers()

export const receiveTodos = (todos, state) => indexBy(prop('id'), todos)
todosHandlers.registerHandler('RECEIVE_TODOS', receiveTodos)

export const addTodo = (text, state) => {
  const newTodo = { id: nextTodoId(), text, completed: false }
  return assoc(newTodo.id, newTodo, state)
}
todosHandlers.registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => evolve({ [id]: { completed: not } }, state)
todosHandlers.registerHandler('TOGGLE_TODO', toggleTodo)

export const todosReducer = todosHandlers.createReducer({})
