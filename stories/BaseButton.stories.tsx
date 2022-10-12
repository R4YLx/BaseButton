import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { BaseButton } from './BaseButton'

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Kruso/BaseButton',
  component: BaseButton,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as ComponentMeta<typeof BaseButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof BaseButton> = (args) => (
  <BaseButton {...args} />
)

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
