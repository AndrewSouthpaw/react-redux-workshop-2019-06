
export const newList = (id, options = {}) => ({ id, name: `List${id}`, todoIds: [], ...options })
export const newListsState = (options) => ({ activeList: null, byId: {}, ...options })

