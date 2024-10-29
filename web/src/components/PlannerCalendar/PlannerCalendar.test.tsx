import { render } from '@redwoodjs/testing/web'

import PlannerCalendar from './PlannerCalendar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PlannerCalendarV2', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <PlannerCalendar
          name={'Julio Verne'}
          birthday={new Date(2022, 10, 1)}
          consultingMonth={1}
          consultingYear={2025}
          selectedColor={'red'}
        />
      )
    }).not.toThrow()
  })
})
