import type { StoryObj } from '@storybook/react'
import { BellIcon } from '@storybook/icons'
import { Badge } from './Badge'
import { Args } from '@storybook/csf'

interface IMeta {
  title: string
  component: object
  parameters: any
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    color: {
      description: 'Badge 색상을 설정합니다.',
      control: { type: 'select' },
    },
    variant: {
      description: 'Badge 유형을 설정합니다.',
    },
    content: {
      description: 'Badge에 표시하는 값입니다.',
      control: { type: 'number', required: true },
    },
    max: {
      description: 'Badge에 표시할 수 있는 최대 숫자를 설정합니다.',
      control: { type: 'number' },
    },
    showZero: {
      description: '값이 0인 경우 Badge 표시 여부를 설정합니다.',
    },
  },
}
export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    content: 3,
    children: <BellIcon size={17} />,
  },
}

export const Color: Story = {
  args: {
    content: 3,
    color: 'primary',
    children: <BellIcon size={17} />,
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '40px' }}>
        <Badge content={5} color={'primary'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'secondary'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'success'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'warning'}>
          {args.children}
        </Badge>
        <Badge content={5} color={'error'}>
          {args.children}
        </Badge>
      </div>
    )
  },
}
export const Variant: Story = {
  args: {
    content: 3,
    variant: 'dot',
    children: <BellIcon size={17} />,
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '50px' }}>
        <Badge content={args.content} variant={'standard'}>
          {args.children}
        </Badge>
        <Badge content={args.content} variant={'dot'}>
          {args.children}
        </Badge>
      </div>
    )
  },
}

export const ShowZero: Story = {
  args: {
    content: 0,
    showZero: true,
    children: <BellIcon size={17} />,
  },
  render: (args: Args) => {
    return (
      <div style={{ display: 'flex', justifyContent: 'space-evenly', gap: '50px' }}>
        <Badge content={args.content} showZero={true}>
          {args.children}
        </Badge>
        <Badge content={args.content} variant={'dot'} showZero={true}>
          {args.children}
        </Badge>
        <Badge content={args.content} showZero={false}>
          {args.children}
        </Badge>
      </div>
    )
  },
}
export const MaxValue: Story = {
  args: {
    content: 55,
    max: 50,
    children: <BellIcon size={17} />,
  },
  render: (args: Args) => (
    <>
      <Badge content={args.content} max={args.max}>
        {args.children}
      </Badge>
    </>
  ),
}
