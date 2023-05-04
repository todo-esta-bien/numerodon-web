import { render } from '@redwoodjs/testing/web'

import Base22Diagram from './Base22Diagram'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Base22Diagram', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Base22Diagram birthday={new Date(1994, 12, 27)}/>)
    }).not.toThrow()
  })
})
