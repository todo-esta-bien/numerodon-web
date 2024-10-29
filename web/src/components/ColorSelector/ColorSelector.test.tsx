import { render } from '@redwoodjs/testing/web'

import ColorSelector from './ColorSelector'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ColorSelector', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ColorSelector />)
    }).not.toThrow()
  })
})
