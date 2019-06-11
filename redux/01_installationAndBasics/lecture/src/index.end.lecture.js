import { pipe, assocPath, assoc, append, dissocPath, without } from 'ramda'

const state = {
  todos: [
    { id: 1, text: 'Eat food', completed: true },
    { id: 2, text: 'Exercise', completed: false },
  ],
}

let counter = 1

export const reducer = (state, action) => {
  // { type: 'ADD_TODO', text: 'Hello' }
  switch (action.type) {
    case 'ADD_TODO': {
      const newTodo = { id: counter++, name: action.text }
      return pipe(
        assocPath(['todosById', newTodo.id], newTodo),
        assoc('ids', append(newTodo.id, state.ids)),
      )(state)
    }

    // { type: 'TOGGLE_TODO', id: 1 }
    case 'TOGGLE_TODO': {
      return pipe(
        dissocPath(['todosById', action.id]),
        assoc('ids', without([action.id], state.ids)),
      )(state)
    }
  }
}

// export function visibilityFilter(state = 'SHOW_ALL', action) {
//   switch (action.type) {
//     case 'SET_VISIBILITY_FILTER':
//       return action.filter
//     case 'RESET_VISIBILITY_FILTER':
//       return 'SHOW_ALL'
//     default:
//       return state
//   }
// }
//
// export function todos(state = [], action) {
//   switch (action.type) {
//     case 'ADD_TODO':
//       return state.concat([{ text: action.text, completed: false }])
//     case 'TOGGLE_TODO':
//       return state.map((todo, index) => (
//         action.index === index ? { text: todo.text, completed: !todo.completed } : todo
//       ))
//     default:
//       return state
//   }
// }
//
// export function todoAppState(state = {}, action) {
//   return {
//     todos: todos(state.todos, action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter, action)
//   }
// }
