// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PlannerCalendar> = (args) => {
//   return <PlannerCalendar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PlannerCalendar from './PlannerCalendar'

export const generated = () => {
  return <PlannerCalendar />
}

export default {
  title: 'Components/PlannerCalendar',
  component: PlannerCalendar,
} as ComponentMeta<typeof PlannerCalendar>
