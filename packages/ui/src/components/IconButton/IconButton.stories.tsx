import type { StoryObj } from '@storybook/react'
import { IconButton } from './IconButton'
import { IconButtonProps } from './IconButton'
import { TrashIcon } from '@storybook/icons'
import StoryTemplate from '@kt-cloud-front/ui/common/StoryTemplate'

const colorOptions = ['primary', 'secondary', 'success', 'error', 'warning'] as const
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
  title: 'Components/IconButton',
  component: IconButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
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
    onClick: {
      description: 'button이 눌렸을 때, onClick 이벤트를 설정합니다.',
    },
  },
}
export default meta

type Story = StoryObj<IconButtonProps>

export const Default: Story = {
  args: {
    icon: <TrashIcon size={20} />,
    onClick: () => alert('IconButton clikced')
  },
}

export const Color: Story = {
  render: () => {
    const colorGroup = colorOptions.map((color) => (
      <IconButton color={color} icon={<TrashIcon size={20}/>} href='https://www.naver.com'/>
    ))
    return <StoryTemplate items={colorGroup} />
  },
}

export const Disabled: Story = {
  args: {
    icon: <TrashIcon size={20} />,
    disabled: true,
  },
}
