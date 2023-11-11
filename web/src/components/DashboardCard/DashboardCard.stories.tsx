// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DashboardCard> = (args) => {
//   return <DashboardCard {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import DashboardCard from './DashboardCard'

export const generated = () => {
  return <DashboardCard />
}

export default {
  title: 'Components/DashboardCard',
  component: DashboardCard,
} as Meta<typeof DashboardCard>
