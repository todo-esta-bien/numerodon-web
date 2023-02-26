import { render } from '@redwoodjs/testing/web'

import PythagoreanPinnacle from './PythagoreanPinnacle'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PythagoreanPinnacle', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PythagoreanPinnacle birthday={new Date(1963, 2, 13)} />)
    }).not.toThrow()
  })
})
