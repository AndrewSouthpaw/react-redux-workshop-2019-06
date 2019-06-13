import { addList, chooseList } from '../../../actions'
import { getActiveList, getLists } from '../../../selectors'
import { connect } from 'react-redux'

import {  } from '../../todos/components/private/'

export class _Lists extends React.Component {
  state = {
    list: '',
  }

  submitForm = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    const { list } = this.state
    dispatch(addList(list))
    this.setState({ list: '' })
  }

  handleInput = (key) => (e) => { this.setState({ [key]: e.target.value }) }

  handleChooseList = (id) => { this.props.dispatch(chooseList(id)) }

  render() {
    const { activeList, lists } = this.props
    const { list } = this.state
    return (
      <div className="lists-pane">
        <h3>Lists ({lists.length})</h3>
        <form onSubmit={this.submitForm}>
          <input
            type="text"
            placeholder="Add a list"
            value={list}
            onChange={this.handleInput('list')}
            data-test-id="dt-list-input"
          />
          <button type="submit">Add List</button>
        </form>
        <ul>
          {lists.map(list => (
            <li key={list.id} onClick={() => this.handleChooseList(list.id)}>
              {list.name}
              {activeList.id === list.id && ' <'}
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

const _ListsMapStateToProps = (state, ownProps) => ({
  lists: getLists(state.lists),
  activeList: getActiveList(state.lists) || {},
})
export const Lists = connect(_ListsMapStateToProps)(_Lists)
