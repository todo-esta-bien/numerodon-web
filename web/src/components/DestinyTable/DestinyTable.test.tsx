import { render } from '@redwoodjs/testing/web'

import DestinyTable from './DestinyTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('DestinyTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<DestinyTable
        birthday={new Date(1976, 9, 25)}
        firstNames="María"
        fatherLastNames="Tamez"
        motherLastNames="Ramirez"
      />)
    }).not.toThrow()
  })
})
