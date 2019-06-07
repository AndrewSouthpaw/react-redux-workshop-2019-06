import React from 'react'
import { findByText, sel, setupMount } from '../lib/helpers'
import { App } from '../App.begin'
import {shallow} from 'enzyme'

const defaultProps = () => ({})

const wrap = setupMount(App, defaultProps)

describe('App', () => {
  it('shallow can be deceptive or useless...', () => {
    const w = shallow(<App />)
    expect(w.debug()).toMatchSnapshot()
  })

  it('should show some text', () => {
    const w = wrap()
    expect(w.text()).toEqual(
      'Welcome' +
      'Thank you for visiting us on the interwebs! ' +
      'Favorite links:CSS Puns' +
      'Guestbook' +
      'Please sign my guestbook!' +
      'There are' +
      '2,389,987' +
      'hits this month',
    )
  })
})
