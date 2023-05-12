import { render } from '@redwoodjs/testing/web'

import DashboardCard from './DashboardCard'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DashboardCard', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DashboardCard />)
    }).not.toThrow()
  })
})
