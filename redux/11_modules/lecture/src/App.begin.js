import React from 'react'
import './App.scss'
import { connect } from 'react-redux'
import { addList, addTodoToList, chooseList, toggleTodo } from './actions'
import { Todo } from './lib/Todo'
import { getActiveList, getLists, getTodos } from './selectors'

export class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Lists />
        <Todos />
      </div>
    )
  }
}
