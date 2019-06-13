import { Todo } from '../../../lib/Todo'
import { connect } from 'react-redux'

export class _Todos extends React.Component {
  state = {
    todo: '',
  }

  submitForm = (e) => {
    e.preventDefault()
    const { dispatch, list } = this.props
    dispatch(addTodoToList(list.id, this.state.todo))
    this.setState({ todo: '' })
  }

  handleCheckTodo = (id) => { this.props.dispatch(toggleTodo(id)) }

  handleInput = (key) => (e) => { this.setState({ [key]: e.target.value }) }

  render() {
    const { list, todos } = this.props
    const { todo } = this.state

    if (!list) return (<p>Select a list</p>)

    return (
      <div className="todos-pane">
        <AddNewTodo />
        <CurrentTodos/>
        {editing && (<EditTodo />)}
      </div>
    )
  }
}

const _TodosMapStateToProps = (state, ownProps) => {
  const list = getActiveList(state.lists)
  return ({
    todos: list ? getTodos(list.todoIds, state.todos) : [],
    list,
  })
}
export const Todos = connect(_TodosMapStateToProps)(_Todos)
