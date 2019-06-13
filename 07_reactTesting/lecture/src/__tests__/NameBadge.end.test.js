import React from 'react'
import { NameBadge } from '../NameBadge.end'
import { shallow, mount } from 'enzyme'
import { findByText, sel } from '../lib/helpers'

describe('NameBadge', () => {
  const getName = sel('name')
  const getAvatar = sel('avatar')
  const getMessageInput = sel('message')

  it('should display img and a title', () => {
    const wrapper = shallow(<NameBadge name="Andrew" avatar="img.jpg" />)
    const image = getAvatar(wrapper)
    expect(image.exists()).toEqual(true)
    const name = getName(wrapper)
    expect(name.text()).toMatch('Andrew')
  })

  it('should show following after clicking button', () => {
    const wrapper = shallow(<NameBadge name="Andrew" avatar="img.jpg" />)
    findByText('Follow', wrapper).simulate('click')
    expect(wrapper.text()).toMatch('(Following)')
    findByText('Unfollow', wrapper).simulate('click')
    expect(wrapper.text()).not.toMatch('(Following)')
  })

  it('should be able to send a message', () => {
    const wrapper = shallow(<NameBadge name="Andrew" avatar="img.jpg" />)
    getMessageInput(wrapper).simulate('change', { target: { value: 'How are you soooooo cool?!' } })
    expect(getMessageInput(wrapper).props().value).toEqual('How are you soooooo cool?!')
    findByText('Send message', wrapper).simulate('click')
    expect(wrapper.text()).toMatch('Successfully sent message')
  })
})
