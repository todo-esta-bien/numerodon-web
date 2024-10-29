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

import PlannerCalendarV2 from './PlannerCalendar'

const meta: Meta<typeof PlannerCalendarV2> = {
  component: PlannerCalendarV2,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof PlannerCalendarV2>

export const Primary: Story = {
  args: {
    birthday: new Date(1963, 2, 13),
    name: 'Rodrigo Medina Neri',
    consultingYear: 2023,
    consultingMonth: 11,
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
}
