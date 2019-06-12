// todos
export const receiveTodos = (todos) =>
  ({ type: 'RECEIVE_TODOS', todos })

export const addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (id) =>
  ({ type: 'TOGGLE_TODO', id })
