import { diff, setupState } from '../lib/helpers'
import { addList, addTodo, addTodoToList, chooseList, receiveLists, receiveTodos, toggleTodo } from '../reducer.end'
import { newList, newListsState, newTodo } from '../factories'

describe('todos reducer', () => {
  it('#receiveTodos should receive todos', () => {
    const todos = [newTodo(1), newTodo(2), newTodo(3)]
    const state = receiveTodos(todos, {})
    expect(state).toEqual({
      1: { 'completed': false, 'id': 1, 'text': '1' },
      2: { 'completed': false, 'id': 2, 'text': '2' },
      3: { 'completed': false, 'id': 3, 'text': '3' },
    })
  })

  it('#addTodo should add a todo', () => {
    const [s0, s1, s2] = setupState({},
      x => addTodo(newTodo(1), x),
      x => addTodo(newTodo(2), x),
    )
    expect(s1).toEqual({
      1: { 'completed': false, 'id': 1, 'text': '1' },
    })
    expect(s2).toEqual({
      1: { 'completed': false, 'id': 1, 'text': '1' },
      2: { 'completed': false, 'id': 2, 'text': '2' },
    })
  })

  it('#toggleTodo should toggle completed state', () => {
    const [s0, s1, s2] = setupState({ 1: { text: '1', completed: false }, 2: { text: '2', completed: false } },
      x => toggleTodo(1, x),
      x => toggleTodo(1, x),
    )
    expect(diff(s0, s1)).toEqual({ 1: { text: '1', completed: true } })
    expect(diff(s1, s2)).toEqual({ 1: { text: '1', completed: false } })
  })
})

  describe('lists reducer', () => {

  it('#receiveLists should receive lists', () => {
    const lists = [newList(1), newList(2)]
    expect(receiveLists(lists, {})).toEqual({
      byId: {
        1: { 'id': 1, 'name': 'List1', 'todoIds': [] },
        2: { 'id': 2, 'name': 'List2', 'todoIds': [] },
      },
    })
  })

  it('#chooseList should update the active list', () => {
    expect(chooseList(42, newListsState())).toEqual({ activeList: 42, byId: {} })
  })

  it('#addList should create a new list', () => {
    const [s0, s1, s2] = setupState({ activeList: null, byId: {} },
      s => addList('List1', s),
      s => addList('List2', s),
    )
    expect(diff(s0, s1)).toEqual({
      byId: { 1: { 'id': 1, 'name': 'List1', 'todoIds': [] } },
    })
    expect(diff(s1, s2)).toEqual({
      byId: {
        1: { 'id': 1, 'name': 'List1', 'todoIds': [] },
        2: { 'id': 2, 'name': 'List2', 'todoIds': [] },
      },
    })
  })

  it('#addTodoToList should update todo ids in list', () => {
    const [s0, s1] = setupState(
      newListsState({ byId: { 1: newList(1) } }),
      s => addTodoToList(1, 42, s),
    )
    expect(diff(s0, s1)).toEqual({
      byId: { 1: { 'id': 1, 'name': 'List1', 'todoIds': [42] } }
    })
  })
})
