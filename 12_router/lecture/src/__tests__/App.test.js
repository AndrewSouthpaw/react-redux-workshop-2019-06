import { findByText, navigateLink, sel, setupMount } from '../lib/helpers'
import { App } from '../App.end'

const defaultProps = () => ({})

const wrap = setupMount(App, defaultProps)

describe('App', () => {
  const main = sel('dt-main')

  it('should work with routing', () => {
    const w = wrap()
    expect(main(w).text()).toEqual('Index')
    navigateLink(findByText('About', w))
    expect(main(w).text()).toEqual('About')
  })
})
