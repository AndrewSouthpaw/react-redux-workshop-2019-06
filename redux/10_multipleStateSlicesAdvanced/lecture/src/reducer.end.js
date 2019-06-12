import { createHandlers } from 'redux-handlers'
import { assocPath, append, assoc, evolve, indexBy, not, prop } from 'ramda'
import { nextListsId, nextTodoId } from './lib/helpers'

// lists
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

export const listsReducer = listsHandlers.createReducer({})

// todos
const todosHandlers = createHandlers()

export const receiveTodos = (todos, state) => indexBy(prop('id'), todos)
todosHandlers.registerHandler('RECEIVE_TODOS', receiveTodos)

export const addTodo = (todo, state) => assoc(todo.id, todo, state)
todosHandlers.registerHandler('ADD_TODO', addTodo)

export const toggleTodo = (id, state) => evolve({ [id]: { completed: not } }, state)
todosHandlers.registerHandler('TOGGLE_TODO', toggleTodo)

export const todosReducer = todosHandlers.createReducer({})
