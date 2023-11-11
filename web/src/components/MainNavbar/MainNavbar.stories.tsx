// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { StoryObj, StoryFn } from '@storybook/react'
//
// export const generated: ComponentStory<typeof MainNavbar> = (args) => {
//   return <MainNavbar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import MainNavbar from './MainNavbar'

export const generated: StoryObj<typeof MainNavbar> = {
  render: (args) => {
    return <MainNavbar {...args} />
  },
}

export default {
  title: 'Components/MainNavbar',
  component: MainNavbar,
  args: {
    birthday: new Date(1994, 11, 27),
    fullName: 'Rodrigo Medina',
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
    fullName: {
      control: 'text',
    },
  },
} as Meta<typeof MainNavbar>
