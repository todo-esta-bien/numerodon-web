import { render } from '@redwoodjs/testing/web'

import TantricGrid from './TantricGrid'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('TantricGrid', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<TantricGrid birthday={new Date(1994, 12, 27)} />)
    }).not.toThrow()
  })
})
