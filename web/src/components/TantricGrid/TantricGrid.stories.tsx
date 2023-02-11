// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof TantricGrid> = (args) => {
//   return <TantricGrid {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import TantricGrid from './TantricGrid'

export const generated: ComponentStory<typeof TantricGrid> = (args) => {
  return <TantricGrid {...args} />
}

export default {
  title: 'Components/TantricGrid',
  component: TantricGrid,
  args: {
    birthday: new Date(1994, 11, 27),
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof TantricGrid>
