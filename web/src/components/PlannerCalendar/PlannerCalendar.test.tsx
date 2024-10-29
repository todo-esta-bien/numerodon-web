import { render } from '@redwoodjs/testing/web'

import PlannerCalendarV2 from './PlannerCalendar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlannerCalendarV2', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannerCalendarV2 />)
    }).not.toThrow()
  })
})
