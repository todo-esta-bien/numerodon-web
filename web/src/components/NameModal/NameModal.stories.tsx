// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { StoryObj, StoryFn } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NameModal> = (args) => {
//   return <NameModal {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { Meta } from '@storybook/react'

import NameModal from './NameModal'

export const generated: StoryObj<typeof NameModal> = {
  render: (args) => {
    return <NameModal {...args} />
  },
}

export default {
  title: 'Components/NameModal',
  component: NameModal,
  args: {
    firstNames: 'Miley',
    fatherLastNames: 'Ray',
    motherLastNames: 'Cyrus',
  },
} as Meta<typeof NameModal>
