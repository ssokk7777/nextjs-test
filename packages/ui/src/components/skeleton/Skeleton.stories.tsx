import type { StoryObj } from '@storybook/react'
import { Skeleton } from './Skeleton'
import { FunctionComponent } from 'react'
import { Args } from '@storybook/csf'

interface IMeta {
  title: string
  component: FunctionComponent
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Skeleton',
  component: Skeleton,
  tags: ['autodocs', '!dev'],
  argTypes: {
    animation: {
      description: 'Skeleton의 효과를 설정합니다.',
    },
    height: {
      description: 'Skeleton 높이를 설정합니다.',
      control: { type: 'number' },
    },
    variant: {
      description: 'Skeleton의 속성을 설정합니다.',
    },
    width: {
      description: 'Skeleton 너비를 설정합니다.',
      control: { type: 'number' },
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'rectangular',
    animation: 'pulse',
  },
  render: (args: Args) => {
    return (
      <Skeleton
        variant={args.variant}
        animation={args.animation}
        width={args.width}
        height={args.height}
      />
    )
  },
}

export const Variant: Story = {
  args: {
    variant: 'rectangular',
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '50px' }}>
        <Skeleton variant={'circular'} />
        <Skeleton variant={'rectangular'} />
        <Skeleton variant={'rounded'} />
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
<Skeleton variant={'circular'} />
<Skeleton variant={'rectangular'} />
<Skeleton variant={'rounded'} />
        `,
      },
    },
  },
}

export const Animation: Story = {
  args: {
    animation: 'pulse',
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '50px' }}>
        <Skeleton animation={'pulse'} />
        <Skeleton animation={'wave'} />
        <Skeleton animation={false} />
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
<Skeleton animation={'pulse'} />
<Skeleton animation={'wave'} />
<Skeleton animation={false} />
        `,
      },
    },
  },
}
