import { render } from '@redwoodjs/testing/web'

import EvolutiveProfile from './EvolutiveProfile'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('EvolutiveProfile', () => {
  it('renders successfully', () => {
    expect(() => {
      render(
        <EvolutiveProfile
          birthday={new Date(1995, 10, 7)}
          firstNames="Miley"
          fatherLastNames="Ray"
          motherLastNames="Cyrus"
        />
      )
    }).not.toThrow()
  })
})
