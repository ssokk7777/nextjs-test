import { Chip, ChipProps } from '../chip/Chip'
import type { StoryObj } from '@storybook/react'
import { ReactNode, useState } from 'react'

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
  title: 'Components/Chip',
  component: Chip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    label: {
      description: 'Chip에 표시할 라벨을 정의합니다.',
    },
    variant: {
      description: 'Chip 유형을 설정합니다.',
    },
    size: {
      description: 'Chip 크기를 설정합니다.',
    },
    color: {
      description: 'Chip 색상을 설정합니다.',
      control: 'select',
    },
    clickable: {
      description: 'Chip 클릭 가능 여부를 설정합니다.',
      control: 'boolean',
    },
    onClick: {
      description: 'Chip 클릭 이벤트를 정의합니다.',
    },
    deletable: {
      description: 'Chip 삭제 기능 여부를 설정합니다.',
      control: 'boolean',
    },
    onDelete: {
      description: 'Chip 삭제 이벤트를 정의합니다.',
    },
  },
}
export default meta

type Story = StoryObj<ChipProps>

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBlock: '10px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '30px' }}>{children}</div>
    </div>
  )
}

const DefaultTemplate = (args: ChipProps) => {
  const handleClick = () => {
    alert('Chip Click!')
  }
  const handleDelete = () => {
    alert('Chip Delete!')
  }
  return (
    <Container>
      <Chip {...args} onClick={handleClick} onDelete={handleDelete} />
    </Container>
  )
}

const VariantTemplate = (args: ChipProps) => {
  return (
    <Container>
      <Chip {...args} variant={'outlined'} label={'outlined'} />
      <Chip {...args} variant={'filled'} label={'filled'} />
    </Container>
  )
}

const ColorTemplate = (args: ChipProps) => {
  return (
    <>
      <Container>
        <Chip {...args} label={'default'} color={'default'} />
        <Chip {...args} label={'primary'} color={'primary'} />
        <Chip {...args} label={'secondary'} color={'secondary'} />
        <Chip {...args} label={'error'} color={'error'} />
        <Chip {...args} label={'info'} color={'info'} />
        <Chip {...args} label={'success'} color={'success'} />
        <Chip {...args} label={'warning'} color={'warning'} />
      </Container>
      <Container>
        <Chip {...args} label={'default'} color={'default'} variant={'filled'} />
        <Chip {...args} label={'primary'} color={'primary'} variant={'filled'} />
        <Chip {...args} label={'secondary'} color={'secondary'} variant={'filled'} />
        <Chip {...args} label={'error'} color={'error'} variant={'filled'} />
        <Chip {...args} label={'info'} color={'info'} variant={'filled'} />
        <Chip {...args} label={'success'} color={'success'} variant={'filled'} />
        <Chip {...args} label={'warning'} color={'warning'} variant={'filled'} />
      </Container>
    </>
  )
}

const SizeTemplate = (args: ChipProps) => {
  return (
    <Container>
      <Chip {...args} label={'small'} size={'small'} />
      <Chip {...args} label={'medium'} size={'medium'} />
    </Container>
  )
}

const ClickTemplate = (args: ChipProps) => {
  const handleClick = () => {
    alert('Chip Click!')
  }
  return (
    <Container>
      <Chip {...args} clickable onClick={handleClick} />
    </Container>
  )
}

const DeleteTemplate = (args: ChipProps) => {
  const [sampleData, setSampleData] = useState<string[]>(['Dog', 'Cat', 'Monkey', 'Frog', 'Turtle'])
  const handleDelete = (target: string) => () => {
    setSampleData(sampleData.filter((data) => data !== target))
  }
  return (
    <div
      style={{
        display: 'flex',
        paddingBlock: '10px',
        columnGap: '10px',
      }}
    >
      {sampleData.map((data: string) => {
        return <Chip {...args} label={data} deletable onDelete={handleDelete(data)} />
      })}
    </div>
  )
}

export const Default: Story = {
  render: DefaultTemplate,
  args: {
    label: 'Label1',
    variant: 'outlined',
    size: 'small',
    color: 'default',
  },
}

export const Variant: Story = {
  render: VariantTemplate,
}
export const Color: Story = {
  render: ColorTemplate,
}

export const Size: Story = {
  render: SizeTemplate,
}

export const Clickable: Story = {
  render: ClickTemplate,
  args: {
    clickable: true,
    label: 'Click Me!',
  },
}

export const Deletable: Story = {
  render: DeleteTemplate,
  args: {
    deletable: true,
  },
}
