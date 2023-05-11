import { render } from '@redwoodjs/testing/web'

import DateModal from './DateModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DateModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DateModal />)
    }).not.toThrow()
  })
})
