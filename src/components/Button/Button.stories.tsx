import React from 'react'
import { Meta, Story } from '@storybook/react/types-6-0'
import Button, { Props as ButtonProps } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
} as Meta

const Template: Story<ButtonProps> = (args) => <Button {...args}>Click</Button>

export const Default = Template.bind({})
Default.args = {
  onClick: () => {},
}

export const Secondary = Template.bind({})
Secondary.args = {
  onClick: () => {},
  color: 'secondary',
}

export const Contained = Template.bind({})
Contained.args = {
  onClick: () => {},
  variant: 'contained',
}
