// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof PythagoreanPinnacle> = (args) => {
//   return <PythagoreanPinnacle {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import PythagoreanPinnacle from './PythagoreanPinnacle'

export const generated: ComponentStory<typeof PythagoreanPinnacle> = (args) => {
  return <PythagoreanPinnacle {...args} />
}

export default {
  title: 'Components/PythagoreanPinnacle',
  component: PythagoreanPinnacle,
  args: {
    birthday: new Date(1995, 10, 7),
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof PythagoreanPinnacle>
