import type { StoryObj } from '@storybook/react'
import { Divider } from './Divider'
import { FunctionComponent } from 'react'
import { Args } from '@storybook/csf'

interface IMeta {
  title: string
  component : FunctionComponent
  tags: string[]
  args?: {}
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Divider',
  component: Divider,
  tags: ['autodocs', '!dev'],
  argTypes: {
    orientation: {
      description: 'Divider의 방향을 설정합니다.',
    },
    textAlign: {
      description: 'Divider 내 children 정렬을 설정합니다.'
    },
    variant: {
      description: 'Divider의 간격을 설정합니다.'
    },
    children: {
      description: 'Divider에 표시될 children 요소를 설정합니다.',
    }
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    variant: 'fullWidth',
    orientation: 'horizontal'
  },
  render: (args: Args) => {
    return (
      <Divider variant={args.variant} orientation={args.orientation} />
    )
  },
}

export const Variant: Story = {
  args: {
    variant: 'fullWidth',
  },
  render: (args: Args) => {
    return (
      <div>
        <Divider variant={'fullWidth'} />
        <div style={{ height: '20px' }} />
        <Divider variant={'middle'} />
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
<Divider variant={'fullWidth'} />
<Divider variant={'middle'} />
        `,
      },
    },
  },
}

export const Orientation: Story = {
  args: {
    orientation: 'vertical'
  },
  render: (args: Args) => {
    return (
      <>
        <Divider orientation={'horizontal'} />
        {/*<div style={{*/}
        {/*  display: 'flex',*/}
        {/*  flexDirection: 'column',*/}
        {/*  height: 100,*/}
        {/*}}>*/}
        {/*  <Divider orientation={'vertical'} />*/}
        {/*</div>*/}
        <Divider orientation={'vertical'} />
      </>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
          <Divider orientation={'horizontal'} />
          <Divider orientation={'vertical'} />
        `,
      },
    },
  },
}

export const TextAlign: Story = {
  args: {
    textAlign: 'left',
    children: <>TEXT</>,

  },
  render: (args: Args) => {
    return (
      <div>
        <Divider textAlign={'left'} children={args.children} />
        <Divider textAlign={'center'} children={args.children} />
        <Divider textAlign={'right'} children={args.children} />
      </div>
    )
  },
  parameters: {
    docs: {
      source: {
        code: `
<Divider textAlign={'left'} children={'TEXT'} />
<Divider textAlign={'center'} children={'TEXT'} />
<Divider textAlign={'right'} children={'TEXT'} />
        `,
      },
    },
  },
}