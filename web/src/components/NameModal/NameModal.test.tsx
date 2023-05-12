import { render } from '@redwoodjs/testing/web'

import NameModal from './NameModal'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('NameModal', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<NameModal />)
    }).not.toThrow()
  })
})
