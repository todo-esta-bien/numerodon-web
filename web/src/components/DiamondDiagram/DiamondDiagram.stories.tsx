// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DiamondProfileDiagram> = (args) => {
//   return <DiamondProfileDiagram {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import DiamondDiagram from './DiamondDiagram'

export const generated: ComponentStory<typeof DiamondDiagram> = (args) => {
  args.birthday = new Date(args.birthday)
  return <DiamondDiagram {...args} />
}

export default {
  title: 'Components/DiamondDiagram',
  component: DiamondDiagram,
  args: {
    birthday: new Date(1963, 2, 13),
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof DiamondDiagram>
