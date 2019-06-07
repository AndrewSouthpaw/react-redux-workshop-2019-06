import { findByText, sel, setupMount } from '../lib/helpers'
import { App } from '../App.begin'

const defaultProps = () => ({})

const wrap = setupMount(App, defaultProps)

describe('App', () => {
  it('should have Timer 1 go up in value', () => {})
  it('should have Timer 2 go down in value', () => {})
  it('should have Timer 2 stop going down at 0', () => {})
})
