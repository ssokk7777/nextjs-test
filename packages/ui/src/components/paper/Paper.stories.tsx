import type { Meta, StoryObj } from '@storybook/react'
import { Paper } from './Paper'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const variantOptions = ['outlined', 'elevation'] as const

const meta: Meta<typeof Paper> = {
  title: 'Components/Paper',
  component: Paper,
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
      description: 'Paper 의 유형을 설정합니다.',
    },
  },
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => {
    const defaultGroup = variantOptions.map((variant) => (
      <Paper variant={variant} elevation={1} children={`this is a ${variant} paper`} />
    ))
    return <StoryTemplate items={defaultGroup} />
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Paper {...args} />
        `,
      },
    },
  },
}
