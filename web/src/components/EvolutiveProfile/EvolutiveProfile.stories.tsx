// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof EvolutiveProfile> = (args) => {
//   return <EvolutiveProfile {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import EvolutiveProfile from './EvolutiveProfile'

export const generated: ComponentStory<typeof EvolutiveProfile> = (args) => {
  return <EvolutiveProfile {...args} />
}

export default {
  title: 'Components/EvolutiveProfile',
  component: EvolutiveProfile,
  args: {
    birthday: new Date(1995, 10, 7),
    firstNames: 'Jhocelyn',
    fatherLastNames: 'Cruz',
    motherLastNames: 'Espinosa',
  },
  argTypes: {
    birthday: {
      control: 'date',
    },
  },
} as ComponentMeta<typeof EvolutiveProfile>
