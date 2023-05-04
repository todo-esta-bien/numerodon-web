// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Base22Diagram> = (args) => {
//   return <Base22Diagram {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Base22Diagram from './Base22Diagram'

export const generated: ComponentStory<typeof Base22Diagram> = (args) => {
  return <Base22Diagram {...args}/>
}

export default {
  title: 'Components/Base22Diagram',
  component: Base22Diagram,
  args: {
    birthday: new Date(1963, 2, 13),
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof Base22Diagram>
