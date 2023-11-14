import { render } from '@redwoodjs/testing/web'

import PlannerPage from './PlannerPage'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

jest.spyOn(React, 'useContext').mockImplementation(() => ({
  urlParams: {
    birthday: '2021-01-01',
    firstNames: 'John',
    fatherLastNames: 'Doe',
    motherLastNames: 'Smith',
  },
}))

describe('PlannerPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PlannerPage />)
    }).not.toThrow()
  })
})
