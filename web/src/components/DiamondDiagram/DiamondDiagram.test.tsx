import { render } from '@redwoodjs/testing/web'

import DiamondDiagram from './DiamondDiagram'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DiamondDiagram', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DiamondDiagram birthday={new Date(1994, 12, 27)} />)
    }).not.toThrow()
  })
})
