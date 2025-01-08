import type { StoryObj } from '@storybook/react'
import { Radio } from './Radio'
import { RadioProps } from './Radio'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'
import React from "react";

const colorOptions = ['primary', 'secondary', 'success', 'error', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const
interface IMeta {
  title: string
  component: object
  parameters: object
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Radio',
  component: Radio,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    color: {
      description: 'radio의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'radio의 크기를 설정합니다.',
      control: { type: 'select' },
    },
  },
}

export default meta

type Story = StoryObj<RadioProps>

export const Default: Story = {
  args: {
    value: 'radio',
    label: 'Radio',
    id: 'radio',
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) =>
      <Radio id={color} value={color} label={color} color={color} name={'color'}/>
    )
    return <StoryTemplate items={colorGroup} />
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) =>
      <Radio id={size} value={size} label={size} size={size} defaultChecked/>
    )
    return <StoryTemplate items={sizeGroup} />
  },
}

export const Disabled: Story = {
  render: () => {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '40px',
        margin: '40px',
        alignItems: 'center',
      }}>
        <Radio defaultChecked disabled label={'disabled'} />
        <Radio disabled label={'disabled'} />
      </div>
    )
  }
}