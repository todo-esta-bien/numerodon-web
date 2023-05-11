import { render } from '@redwoodjs/testing/web'

import LifeStagesTable from './LifeStagesTable'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('LifeStagesTable', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<LifeStagesTable birthday={new Date(1994, 12, 27)}/>)
    }).not.toThrow()
  })
})
