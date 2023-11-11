// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { StoryObj, StoryFn } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LifeStagesTable> = (args) => {
//   return <LifeStagesTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import LifeStagesTable from './LifeStagesTable'

export const generated: StoryObj<typeof LifeStagesTable> = {
  render: (args) => {
    args.birthday = new Date(args.birthday)
    return <LifeStagesTable {...args} />
  },
}

export default {
  title: 'Components/LifeStagesTable',
  component: LifeStagesTable,
  args: {
    birthday: new Date(1960, 1, 24),
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as Meta<typeof LifeStagesTable>
