export const newTodo = (id, options = {}) => ({ id, text: id.toString(), completed: false, ...options })
export const newTodosState = (options = {}) => ({})
