// eslint-disable-next-line no-use-before-define
import React from 'react'
import { ComponentMeta } from '@storybook/react'
import { withDesign } from 'storybook-addon-designs'

type ButtonProps = {
  children: React.ReactNode
}

function Button({ children }: ButtonProps) {
  return <button>{children}</button>
}

export const myStory = () => <Button><span>Hello, World!</span></Button>

myStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/LKQ4FJ4bTnCSjedbRpk931/Sample-File',
  },
}

export default {
  title: 'My stories',
  component: Button,
  decorators: [withDesign],
} as ComponentMeta<typeof Button>
