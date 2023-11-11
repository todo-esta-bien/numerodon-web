// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DateModal> = (args) => {
//   return <DateModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import DateModal from './DateModal'

export const generated = () => {
  return <DateModal />
}

export default {
  title: 'Components/DateModal',
  component: DateModal,
} as Meta<typeof DateModal>
