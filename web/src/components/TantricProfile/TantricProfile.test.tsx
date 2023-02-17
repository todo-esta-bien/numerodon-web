import { render } from '@redwoodjs/testing/web'

import TantricProfile from './TantricProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TantricProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TantricProfile birthday={new Date(1994, 12, 27)} />)
    }).not.toThrow()
  })
})
