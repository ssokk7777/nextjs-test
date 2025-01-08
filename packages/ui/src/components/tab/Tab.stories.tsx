import { Tab } from './Tab'
import { Tabs, TabsProps } from './Tabs'
import { StoryObj } from '@storybook/react'
import { ReactNode, useState } from 'react'
import { Args } from '@storybook/csf'

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
  title: 'Components/Tab',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    variant: {
      description: 'Tab 유형을 설정합니다.',
      control: { type: 'select' },
    },
    value: {
      description: '선택된 Tab의 값을 정의합니다.',
      control: { type: 'text' },
    },
    color: {
      description: 'Tab 색상을 정의합니다.',
      control: { type: 'select' },
    },
    onChange: {
      description: 'Tab의 onChange event를 설정합니다.',
    },
  },
}

export default meta

type Story = StoryObj<TabsProps>

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBlock: '20px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>{children}</div>
    </div>
  )
}

const ContentPanel = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        paddingBlock: '20px',
        paddingInline: '10px',
      }}
    >
      {children}
    </div>
  )
}

const DefaultTemplate = (args: Args) => {
  const [currTab, setCurrTab] = useState<string | number>(1)
  const handleChange = (tab: string | number) => {
    setCurrTab(tab)
  }
  return (
    <>
      <Tabs
        fullWidth={args.fullWidth}
        variant={args.variant}
        color={args.color}
        value={currTab}
        onChange={handleChange}
      >
        <Tab label={'Tab1'} value={1} />
        <Tab label={'Tab2'} value={2} />
        <Tab label={'Tab3'} value={3} />
      </Tabs>
      {currTab === 1 && <ContentPanel>This is Tab1 content</ContentPanel>}
      {currTab === 2 && <ContentPanel>This is Tab2 content</ContentPanel>}
      {currTab === 3 && <ContentPanel>This is Tab3 content</ContentPanel>}
    </>
  )
}

const VariantTemplate = (args: Args) => {
  const [currTab, setCurrTab] = useState<string | number>(1)
  const handleChange = (tab: string | number) => {
    setCurrTab(tab)
  }
  return (
    <Container>
      <Tabs variant={'standard'} color={args.color} value={currTab} onChange={handleChange}>
        <Tab label={'Tab1'} value={1} />
        <Tab label={'Tab2'} value={2} />
        <Tab label={'Tab3'} value={3} />
      </Tabs>
      <Tabs variant={'filled'} color={args.color} value={currTab} onChange={handleChange}>
        <Tab label={'Tab1'} value={1} />
        <Tab label={'Tab2'} value={2} />
        <Tab label={'Tab3'} value={3} />
      </Tabs>
      <Tabs variant={'outlined'} color={args.color} value={currTab} onChange={handleChange}>
        <Tab label={'Tab1'} value={1} />
        <Tab label={'Tab2'} value={2} />
        <Tab label={'Tab3'} value={3} />
      </Tabs>
    </Container>
  )
}

const ColorTemplate = (args: Args) => {
  const [currTab, setCurrTab] = useState<string | number>(1)
  const handleChange = (tab: string | number) => {
    setCurrTab(tab)
  }
  return (
    <>
      <Container>
        <Tabs variant={args.variant} color={'primary'} value={currTab} onChange={handleChange}>
          <Tab label={'Tab1'} value={1} />
          <Tab label={'Tab2'} value={2} />
          <Tab label={'Tab3'} value={3} />
        </Tabs>
        <Tabs variant={args.variant} color={'secondary'} value={currTab} onChange={handleChange}>
          <Tab label={'Tab1'} value={1} />
          <Tab label={'Tab2'} value={2} />
          <Tab label={'Tab3'} value={3} />
        </Tabs>
        <Tabs variant={args.variant} color={'success'} value={currTab} onChange={handleChange}>
          <Tab label={'Tab1'} value={1} />
          <Tab label={'Tab2'} value={2} />
          <Tab label={'Tab3'} value={3} />
        </Tabs>
      </Container>
      <Container>
        <Tabs variant={args.variant} color={'info'} value={currTab} onChange={handleChange}>
          <Tab label={'Tab1'} value={1} />
          <Tab label={'Tab2'} value={2} />
          <Tab label={'Tab3'} value={3} />
        </Tabs>
        <Tabs variant={args.variant} color={'warning'} value={currTab} onChange={handleChange}>
          <Tab label={'Tab1'} value={1} />
          <Tab label={'Tab2'} value={2} />
          <Tab label={'Tab3'} value={3} />
        </Tabs>
        <Tabs variant={args.variant} color={'error'} value={currTab} onChange={handleChange}>
          <Tab label={'Tab1'} value={1} />
          <Tab label={'Tab2'} value={2} />
          <Tab label={'Tab3'} value={3} />
        </Tabs>
      </Container>
    </>
  )
}

const DisableTemplate = (args: Args) => {
  const [currTab, setCurrTab] = useState<string | number>(1)
  const handleChange = (tab: string | number) => {
    setCurrTab(tab)
  }
  return (
    <Container>
      <Tabs variant={'standard'} color={args.color} value={currTab} onChange={handleChange}>
        <Tab label={'Tab1'} value={1} />
        <Tab label={'Tab2'} value={2} disabled />
        <Tab label={'Tab3'} value={3} />
      </Tabs>
    </Container>
  )
}

const FullWidthTemplate = (args: Args) => {
  const [currTab, setCurrTab] = useState<string | number>(1)
  const handleChange = (tab: string | number) => {
    setCurrTab(tab)
  }
  return (
    <div style={{ width: 700, height: 150, border: '1px solid #e0e0e0', borderRadius: 5 }}>
      <Tabs value={currTab} onChange={handleChange} fullWidth>
        <Tab label={'Tab1'} value={1} />
        <Tab label={'Tab2'} value={2} />
        <Tab label={'Tab3'} value={3} />
      </Tabs>
      {currTab === 1 && <ContentPanel>This is Tab1 content</ContentPanel>}
      {currTab === 2 && <ContentPanel>This is Tab2 content</ContentPanel>}
      {currTab === 3 && <ContentPanel>This is Tab3 content</ContentPanel>}
    </div>
  )
}

export const Default: Story = {
  render: DefaultTemplate,
  args: {
    variant: 'standard',
    color: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tabs variant={variant} color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
{currTab === 1 && <div>This is Tab1 content</div>}
{currTab === 2 && <div>This is Tab2 content</div>}
{currTab === 3 && <div>This is Tab3 content</div>}
        `,
      },
    },
  },
}

export const Variant: Story = {
  render: VariantTemplate,
  args: {
    color: 'primary',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tabs variant={variant} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `,
      },
    },
  },
}

export const Color: Story = {
  render: ColorTemplate,
  args: {
    variant: 'standard',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Tabs color={color} value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} />
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `,
      },
    },
  },
}

export const Disabled: Story = {
  render: DisableTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<Tabs value={value} onChange={handleChange}>
  <Tab label={'Tab1'} value={1} />
  <Tab label={'Tab2'} value={2} disabled/>
  <Tab label={'Tab3'} value={3} />
</Tabs>
        `,
      },
    },
  },
}

export const FullWidth: Story = {
  render: FullWidthTemplate,
  parameters: {
    docs: {
      source: {
        code: `
<div style={{width: 700}}>
  <Tabs fullWidth value={value} onChange={handleChange}>
    <Tab label={'Tab1'} value={1} />
    <Tab label={'Tab2'} value={2} />
    <Tab label={'Tab3'} value={3} />
  </Tabs>
</div>
        `,
      },
    },
  },
}
