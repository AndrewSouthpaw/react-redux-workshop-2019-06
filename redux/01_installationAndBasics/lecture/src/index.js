const state = {
  todos: [
    { text: 'Eat food', completed: true },
    { text: 'Exercise', completed: false },
  ],
  visibilityFilter: 'SHOW_COMPLETED',
}

export function visibilityFilter(state = 'SHOW_ALL', action) {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    case 'RESET_VISIBILITY_FILTER':
      return 'SHOW_ALL'
    default:
      return state
  }
}

export function todos(state = [], action) {
  switch (action.type) {
    case 'ADD_TODO':
      return state.concat([{ text: action.text, completed: false }])
    case 'TOGGLE_TODO':
      return state.map((todo, index) => (
        action.index === index ? { text: todo.text, completed: !todo.completed } : todo
      ))
    default:
      return state
  }
}

export function todoAppState(state = {}, action) {
  return {
    todos: todos(state.todos, action),
    visibilityFilter: visibilityFilter(state.visibilityFilter, action)
  }
}
