import { render } from '@redwoodjs/testing/web'

import ConsultingYearSelector from './ConsultingYearSelector'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('ConsultingYearSelector', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<ConsultingYearSelector />)
    }).not.toThrow()
  })
})
