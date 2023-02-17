import { render } from '@redwoodjs/testing/web'

import PythagoreanProfile from './PythagoreanProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('PythagoreanProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <PythagoreanProfile
          birthday={new Date(1994, 12, 27)}
          firstNames="Miley"
          fatherLastNames="Ray"
          motherLastNames="Cyrus"
        />
      )
    }).not.toThrow()
  })
})
