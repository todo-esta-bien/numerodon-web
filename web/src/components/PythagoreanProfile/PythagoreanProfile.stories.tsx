// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { StoryObj, StoryFn } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PythagoreanProfile> = (args) => {
//   return <PythagoreanProfile {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import PythagoreanProfile from './PythagoreanProfile'

export const generated: StoryObj<typeof PythagoreanProfile> = {
  render: (args) => {
    return <PythagoreanProfile {...args} />
  },
}

export default {
  title: 'Components/PythagoreanProfile',
  component: PythagoreanProfile,
  args: {
    birthday: new Date(1992, 10, 23),
    firstNames: 'Miley',
    fatherLastNames: 'Ray',
    motherLastNames: 'Cyrus',
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as Meta<typeof PythagoreanProfile>
