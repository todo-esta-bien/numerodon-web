import { render } from '@redwoodjs/testing/web'

import Base22Diagram from './Base22Diagram'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Base22Diagram', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Base22Diagram birthday={new Date(1994, 12, 27)} />)
    }).not.toThrow()
  })

  it('displays the correct reduced day', () => {
    const { getByTestId } = render(<Base22Diagram birthday={new Date(1994, 12, 27)} />)
    expect(getByTestId('reduced-day')).toHaveTextContent('9')
  })

  it('displays the correct resistance number', () => {
    const { getByTestId } = render(<Base22Diagram birthday={new Date(1994, 12, 27)} />)
    expect(getByTestId('resistance-number')).toHaveTextContent('2')
  })

  it('displays the correct pain knot', () => {
    const { getByTestId } = render(<Base22Diagram birthday={new Date(1994, 12, 27)} />)
    expect(getByTestId('pain-knot')).toHaveTextContent('3')
  })

  it('displays the correct external defense behavior', () => {
    const { getByTestId } = render(<Base22Diagram birthday={new Date(1994, 12, 27)} />)
    expect(getByTestId('external-defense-behavior')).toHaveTextContent('5')
  })
})
