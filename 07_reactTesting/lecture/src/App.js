import React from 'react'
import avatar from './avatar.jpg'
import './App.scss'
import { NameBadge } from './NameBadge'

export class App extends React.Component {
  render() {
    return (<NameBadge name="Andrew Smith" avatar={avatar} />)
  }
}
