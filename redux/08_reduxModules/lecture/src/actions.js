// lists

export const chooseList = (id) =>
  ({ type: 'CHOOSE_LIST', id })
export const addList = (name) =>
  ({ type: 'ADD_LIST', name })
export const receiveLists = (lists) =>
  ({ type: 'RECEIVE_LISTS', lists })

// todos
export const receiveTodos = (todos) =>
  ({ type: 'RECEIVE_TODOS', todos })

export const addTodo = (todo) =>
  ({ type: 'ADD_TODO', todo })

export const toggleTodo = (id) =>
  ({ type: 'TOGGLE_TODO', id })
