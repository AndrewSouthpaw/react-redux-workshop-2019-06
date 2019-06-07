import { findByText, sel, setupMount } from '../lib/helpers'
import { App } from '../App.begin'
// import { App } from '../App.end.hoc'
// import { App } from '../App.end.renderprop'
import { map } from 'ramda'

const defaultProps = () => ({})

const wrap = setupMount(App, defaultProps)

describe('App', () => {
  const cages = sel('dt-cage')
  const segals = sel('dt-segal')
  const overlay = sel('dt-overlay')

  const isSelected = w => overlay(w).exists()

  it('should allow picking cages', () => {
    const w = wrap()
    expect(cages(w).length).toEqual(4)
    expect(map(isSelected, cages(w))).toEqual([false, false, false, false])
    cages(w).at(1).simulate('click')
    cages(w).at(3).simulate('click')
    expect(map(isSelected, cages(w))).toEqual([false, true, false, true])
    cages(w).at(1).simulate('click')
    cages(w).at(3).simulate('click')
    expect(map(isSelected, cages(w))).toEqual([false, false, false, false])
  })

  it('should allow picking segals', () => {
    const w = wrap()
    expect(segals(w).length).toEqual(4)
    expect(map(isSelected, segals(w))).toEqual([false, false, false, false])
    findByText('OH YEAH', segals(w).at(1)).simulate('click', {})
    findByText('OH YEAH', segals(w).at(3)).simulate('click', {})
    expect(map(isSelected, segals(w))).toEqual([false, true, false, true])
    findByText('OH YEAH', segals(w).at(1)).simulate('click', {})
    findByText('OH YEAH', segals(w).at(3)).simulate('click', {})
    expect(map(isSelected, segals(w))).toEqual([false, false, false, false])
  })
})
