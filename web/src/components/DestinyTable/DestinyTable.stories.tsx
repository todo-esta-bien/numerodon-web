// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { StoryObj, StoryFn } from '@storybook/react'
//
// export const generated: ComponentStory<typeof DestinyTable> = (args) => {
//   return <DestinyTable {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import DestinyTable from './DestinyTable'

export const generated: StoryObj<typeof DestinyTable> = {
  render: (args) => {
    args.birthday = new Date(args.birthday)
    return <DestinyTable {...args} />
  },
}

export default {
  title: 'Components/DestinyTable',
  component: DestinyTable,
  args: {
    birthday: new Date(1976, 9, 25),
    firstNames: 'Ana María',
    fatherLastNames: 'Támez',
    motherLastNames: 'Ramírez',
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as Meta<typeof DestinyTable>
