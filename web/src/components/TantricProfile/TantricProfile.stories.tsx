// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TantricProfile> = (args) => {
//   return <TantricProfile {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TantricProfile from './TantricProfile'

export const generated: ComponentStory<typeof TantricProfile> = (args) => {
  return <TantricProfile {...args} />
}

export default {
  title: 'Components/TantricProfile',
  component: TantricProfile,
  args: {
    birthday: new Date(1994, 11, 27),
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof TantricProfile>
