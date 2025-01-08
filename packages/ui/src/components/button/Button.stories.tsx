import React from 'react'
import type { StoryObj } from '@storybook/react'
import { Button } from './Button'
import { ButtonProps } from './Button'
import { TrashIcon } from '@storybook/icons'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const colorOptions = ['primary', 'secondary', 'success', 'error', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const
const variantOptions = ['filled', 'outlined', 'standard'] as const
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
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  args: {
    label: 'Button',
  },
  argTypes: {
    label: {
      description: 'button의 label을 설정합니다.',
      control: { required: true },
    },
    color: {
      description: 'button의 색상을 설정합니다.',
      control: { type: 'select' },
    },
    disabled: {
      description: '값이 true일 경우, button이 비활성화 됩니다.',
    },
    href: {
      description: 'button이 눌렸을 때, 해당 URL로 이동합니다.',
    },
    loading: {
      description: '값이 true일 경우, button이 로딩 상태로 변경 됩니다.',
    },
    variant: {
      description: 'button의 유형을 설정합니다.',
      control: { type: 'select' },
    },
    size: {
      description: 'button의 크기를 설정합니다.',
      control: { type: 'select' },
    },
    startIcon: {
      description: 'button의 label 앞에 Icon을 위치시킵니다.',
    },
    endIcon: {
      description: 'button의 label 뒤에 Icon을 위치시킵니다.',
    },
    onClick: {
      description: 'button이 눌렸을 때, onClick 이벤트를 설정합니다.',
    },
  },
}
export default meta

type Story = StoryObj<ButtonProps>

export const Default: Story = {
  args: {
    label: 'Button',
    onClick: () => alert('IconButton clicked'),
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => <Button label={color} color={color} href='https://www.naver.com'/>)
    return <StoryTemplate items={colorGroup} />
  },
}

export const Disable: Story = {
  render: () => {
    const variantGroup = variantOptions.map((variant) => (
      <Button label="disabled" variant={variant} disabled />
    ))
    return <StoryTemplate items={variantGroup} />
  },
}

export const Loading: Story = {
  render: () => {
    const loadingGroup = variantOptions.map((variant) => <Button variant={variant} loading />)
    return <StoryTemplate items={loadingGroup} />
  },
}

export const Variant: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => (
      <StoryTemplate
        key={color}
        items={variantOptions.map((variant) => (
          <Button label={variant} variant={variant} color={color} />
        ))}
      />
    ))
    return <>{colorGroup}</>
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => (
      <Button label={size} color="primary" variant="filled" size={size} />
    ))
    return <StoryTemplate items={sizeGroup} />
  },
}

export const StartIcon: Story = {
  render: () => {
    const IconGroup = variantOptions.map((variant) => (
      <Button
        label="Delete"
        color="primary"
        variant={variant}
        disabled
        startIcon={<TrashIcon size={16} />}
      />
    ))
    return <StoryTemplate items={IconGroup} />
  },
}

export const EndIcon: Story = {
  render: () => {
    const IconGroup = variantOptions.map((variant) => (
      <Button
        label="Delete"
        color="secondary"
        variant={variant}
        endIcon={<TrashIcon size={16} />}
      />
    ))
    return <StoryTemplate items={IconGroup} />
  },
}
