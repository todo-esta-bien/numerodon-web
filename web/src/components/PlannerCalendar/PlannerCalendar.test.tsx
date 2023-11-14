import { render } from '@redwoodjs/testing/web'

import PlannerCalendar from './PlannerCalendar'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

const propsFixture = {
  birthday: new Date('2021-01-01'),
  name: 'John Doe',
  consultingMonth: 12,
  consultingYear: 2021,
}

describe('PlannerCalendar', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannerCalendar {...propsFixture} />)
    }).not.toThrow()
  })
})
