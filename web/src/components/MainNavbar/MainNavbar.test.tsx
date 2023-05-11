import { render } from '@redwoodjs/testing/web'

import MainNavbar from './MainNavbar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('MainNavbar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<MainNavbar fullName='Julio Verne' birthday={new Date(2022,10,1)} />)
    }).not.toThrow()
  })
})
