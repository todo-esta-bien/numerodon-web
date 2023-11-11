import { render } from '@redwoodjs/testing/web'

import PlannerCalendar from './PlannerCalendar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlannerCalendar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannerCalendar />)
    }).not.toThrow()
  })
})
