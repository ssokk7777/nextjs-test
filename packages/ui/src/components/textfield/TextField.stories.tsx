import type { Meta, StoryObj } from '@storybook/react'
import { TextField } from './TextField'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const colorOptions = ['primary', 'secondary', 'error', 'success', 'warning'] as const
const sizeOptions = ['small', 'medium', 'large'] as const
const variantOptions = ['filled', 'outlined', 'standard'] as const
const typeOptions = ['text', 'date', 'datetime-local', 'password'] as const

interface IMeta {
  title: string
  component: object
  parameters?: any
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/TextField',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    color: {
      description: 'TextField 색상을 설정합니다.',
      control: { type: 'select', options: colorOptions },
    },
    size: {
      description: 'TextField 크기를 설정합니다.',
      control: { type: 'select', options: sizeOptions },
    },
    variant: {
      description: 'TextField 유형을 설정합니다.',
      control: { type: 'select', options: variantOptions },
    },
    label: {
      description: 'TextField 의 label 을 설정합니다.',
      control: 'text',
    },
    value: {
      description: 'TextField 의 값을 설정합니다.',
      control: 'text',
    },
    style: {
      description: 'TextField 의 style 을 설정합니다.',
    },
    placeholder: {
      description: 'TextField 의 placeholder 를 설정합니다.',
      control: 'text',
    },
    error: {
      description:
        'TextField 의 Error 여부를 설정합니다. 사용자 Feedback 을 위한 helperText 가 사용될 수 있습니다.',
      control: 'boolean',
    },
    helperText: {
      description: 'TextField 의 helperText 를 설정합니다.',
      control: 'text',
    },
    id: {
      description: 'TextField 의 id 를 설정합니다.',
      control: 'text',
    },
    required: {
      description: 'TextField 의 필수 여부를 설정합니다.',
      control: 'boolean',
    },
    disabled: {
      description: 'TextField 의 disabled 속성을 설정합니다.',
      control: 'boolean',
    },
    onChange: {
      description: 'TextField 의 onChange event 를 설정합니다.',
      action: 'changed',
    },
    rows: {
      description: 'TextField 의 row 를 설정합니다. 최대 설정 값은 20 입니다.',
      control: {
        type: 'number',
        min: 1,
        step: 1,
      },
      defaultValue: null,
    },
    type: {
      description: 'TextField 의 형식을 설정합니다.',
      control: { type: 'select', options: typeOptions },
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'label',
    placeholder: 'Enter placeholder',
    variant: 'outlined',
    size: 'medium',
    color: 'primary',
    required: true,
    value: '',
    style: {},
  },
}

export const Variant: Story = {
  render: () => {
    const variantGroup = variantOptions.map((variant) => (
      <TextField label={variant} variant={variant} placeholder={variant} />
    ))
    return <StoryTemplate items={variantGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <TextField variant={variant} />
        `,
      },
    },
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = variantOptions.map((variant) => (
      <StoryTemplate
        key={variant}
        items={colorOptions.map((color) => (
          <TextField
            key={`${color}-${variant}`}
            label={color}
            color={color}
            variant={variant}
            placeholder={color}
          />
        ))}
      />
    ))
    return <>{colorGroup}</>
  },
  parameters: {
    docs: {
      source: {
        code: `
          <TextField color={color} variant={variant} />
        `,
      },
    },
  },
}

export const Size: Story = {
  render: () => {
    const sizeGroup = sizeOptions.map((size) => (
      <TextField label={size} size={size} placeholder={size} />
    ))
    return <StoryTemplate items={sizeGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <TextField size={size} />
        `,
      },
    },
  },
}

export const Multiline: Story = {
  render: () => {
    const variantGroup = variantOptions.map((variant) => (
      <TextField
        multiline
        rows={3}
        variant={variant}
        label={variant}
        placeholder={'multiline TextField'}
      />
    ))
    return <StoryTemplate items={variantGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <TextField multiline rows={rows} />
        `,
      },
    },
  },
}
