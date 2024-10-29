import { render } from '@redwoodjs/testing/web'

import PlannerCalendarDay from './PlannerCalendarDay'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlannerCalendarDay', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannerCalendarDay universalDay={2} personalDay={2} calendarDay={2} selectedColor={'red'} />)
    }).not.toThrow()
  })
})
