import { assoc } from 'ramda'

let counter = 0

export const getTodos = (state) => {
  const { ids, todosById } = state
  return ids.map(id => todosById[id])
}

export const addTodoToState = (text, state) => {
  const todo = { id: counter++, name: text }
  return {
    todosById: assoc(todo.id, todo, state.todosById),
    ids: [...state.ids, todo.id],
  }
}
