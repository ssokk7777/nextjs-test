import React from 'react';
import type { StoryObj } from '@storybook/react'
import { Switch } from './Switch'
import { SwitchProps } from "./Switch"
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const colorOptions = ['primary', 'secondary', 'success', 'error', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const

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
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    color: {
      description: 'switch의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'switch의 크기를 설정합니다.',
      control: { type: 'select' },
    },
  }
}

export default meta

type Story = StoryObj<SwitchProps>

export const Default: Story = {
  args: {
    label: 'Switch',
    name: 'Switch'
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => (
      <Switch label={color} color={color} name={color} onChange={(e) => { console.log(e.target) }} defaultChecked/>
    ))
    return <StoryTemplate items={colorGroup} />
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => (
      <Switch label={size} name={size} size={size}/>
    ))
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
        <Switch disabled label={'disabled'} checked/>
        <Switch disabled label={'disabled'}/>
      </div>
    )
  }
}