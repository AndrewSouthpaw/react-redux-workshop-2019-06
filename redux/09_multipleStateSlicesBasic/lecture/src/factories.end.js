
export const newPreferencesState = (options = {}) => ({
  maxTodos: 5,
  ...options,
})


export const newTodo = (id, options = {}) => ({ id, text: id.toString(), completed: false, ...options })
export const newTodosState = (options = {}) => ({ ...options })
