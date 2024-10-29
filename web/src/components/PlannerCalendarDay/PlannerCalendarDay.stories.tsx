// Pass props to your component by passing an `args` object to your story
//
// ```tsx
// export const Primary: Story = {
//  args: {
//    propName: propValue
//  }
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta, StoryObj } from '@storybook/react'

import PlannerCalendarDay from './PlannerCalendarDay'

const meta: Meta<typeof PlannerCalendarDay> = {
  component: PlannerCalendarDay,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PlannerCalendarDay>

export const Primary: Story = {}
