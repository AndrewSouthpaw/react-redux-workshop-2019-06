
export const newList = (id, options = {}) => ({ id, name: `List${id}`, todoIds: [], ...options })
export const newListsState = (options) => ({ activeList: null, byId: {}, ...options })

export const newTodo = (id, options = {}) => ({ id, text: id.toString(), completed: false, ...options })
export const newTodosState = (options = {}) => ({})
