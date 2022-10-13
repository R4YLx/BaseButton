import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import BaseButton from './BaseButton'


export default {
  title: 'Kruso/BaseButton',
  component: BaseButton,
  args: {
    text: "Button"
  },
  argTypes: {
    text: {
      options: ['Short text', 'Longer button text jao'],
      control: { type: 'select' }
    }
  }
} as ComponentMeta<typeof BaseButton>


const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
)

export const Base = Template.bind({})
Base.args = {
  label: 'BaseButton'
}

export const Anchor = Template.bind({})
Anchor.args = {
  href: '/',
  label: 'BaseButton'
}

export const Medium = Template.bind({})
Medium.args = {
  size: 'm',
  label: 'BaseButton'
}

export const Small = Template.bind({})
Small.args = {
  size: 's',
  label: 'BaseButton'
}

export const Fluid = Template.bind({})
Fluid.args = {
  isFluid: true,
  label: 'BaseButton'
}
