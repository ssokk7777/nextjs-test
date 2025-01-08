import type { StoryObj } from '@storybook/react'
import { RadioGroup } from './RadioGroup'
import { RadioGroupProps } from './RadioGroup'
import { Radio } from '@kt-cloud-front/ui/components/radio/Radio'
import React from "react";

const colorOptions = ['primary', 'secondary', 'success', 'error', 'warning'] as const
interface IMeta {
  title: string;
  component: object
  parameters: object
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    direction: {
      description: 'radio 배치 방향을 설정합니다.',
      // control: { type: 'select' },
    },
  }
}

export default meta

type Story = StoryObj<RadioGroupProps>

export const Default: Story = {
  args: {
    direction: 'column',
    name:'fruit',
    children:
      [
        <Radio id={'apple'} value={'apple'} label={'Apple'} defaultChecked/>,
        <Radio id={'orange'} value={'orange'} label={'Orange'} />,
        <Radio id={'melon'} value={'melon'} label={'Melon'} />
      ]
  }
}

