import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Home } from '.'

export default {
  title: 'Example/Home',
  component: Home,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Home>

const Template: ComponentStory<typeof Home> = () => <Home />

export const Example = Template.bind({})
