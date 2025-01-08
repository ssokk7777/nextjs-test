import type { Meta, StoryObj } from '@storybook/react'
import { Typography } from './Typography'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const variantOptions = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'subtitle1',
  'subtitle2',
  'body1',
  'body2',
  'caption',
  'overline',
] as const

const alignOptions = ['left', 'center', 'right', 'justify'] as const
const colorOptions = [
  'primary',
  'secondary',
  'error',
  'success',
  'warning',
  'textPrimary',
  'textSecondary',
  'textDisabled',
] as const

const meta: Meta<typeof Typography> = {
  title: 'Components/Typography',
  component: Typography,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: variantOptions,
      },
      description: 'Typography 의 유형을 설정합니다.',
    },
    align: {
      control: {
        type: 'select',
        options: alignOptions,
      },
      description: 'Typography 내 Text 의 정렬 방식을 설정합니다.',
    },
    color: {
      control: {
        type: 'select',
        options: colorOptions,
      },
      description: 'Text 의 색상을 설정합니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'body1',
    align: 'left',
    color: 'textPrimary',
    children: 'Default Typography',
  },
  render: (args) => (
    <div style={{ width: '300px', border: '1px solid #ccc', padding: '16px' }}>
      <Typography {...args} />
    </div>
  ),
  parameters: {
    docs: {
      source: {
        code: `
          <Typography {...args} />
        `,
      },
    },
  },
}

export const Variant: Story = {
  render: () => {
    const variantGroup = variantOptions.map((variant) => (
      <Typography variant={variant} color={'textPrimary'} children={variant} />
    ))
    return <StoryTemplate items={variantGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Typography variant={variant} children={children} />
        `,
      },
    },
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => (
      <Typography color={color} children={`Text Color`} />
    ))
    return <StoryTemplate items={colorGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Typography color={color} children={children} />
        `,
      },
    },
  },
}

export const Align: Story = {
  render: () => {
    const alignGroup = alignOptions.map((align) => (
      <div style={{ width: '160px', border: '1px solid #ccc', padding: '16px' }}>
        <Typography align={align} children={`Typography ${align}`} />
      </div>
    ))
    return <StoryTemplate items={alignGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Typography align={align} children={children} />
        `,
      },
    },
  },
}
