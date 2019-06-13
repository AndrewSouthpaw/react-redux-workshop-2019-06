import { values } from 'ramda'

export const getList = (id, state) => state.byId[id]
export const getLists = (state) => values(state.byId)
export const getActiveList = (state) => state.byId[state.activeList]
