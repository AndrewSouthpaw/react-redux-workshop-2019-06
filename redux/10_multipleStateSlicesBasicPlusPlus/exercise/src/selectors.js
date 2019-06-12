import { values } from 'ramda'
export const hydrate = (indexedCollection, ids) => ids.map(id => indexedCollection[id])

// lists
export const getList = (id, state) => state.byId[id]
export const getLists = (state) => values(state.byId)
export const getActiveList = (state) => state.byId[state.activeList]


// todos
export const getTodos = (ids, state) => hydrate(state, ids)
