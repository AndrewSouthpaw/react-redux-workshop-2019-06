import * as actions from './actions'
import { reducer } from './reducer'
import * as selectors from './selectors'

export { reducer }

export const {
  addList,
  chooseList,
} = actions

export const {
  getLists
} = selectors
