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

import PlannerCalendar from './PlannerCalendar'

const meta: Meta<typeof PlannerCalendar> = {
  component: PlannerCalendar,
}

export default meta

type Story = StoryObj<typeof PlannerCalendar>

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
