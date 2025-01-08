import type { StoryObj } from '@storybook/react'
import { Select, SelectProps } from './Select'
import { ChangeEvent, ReactNode, useState } from 'react'

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
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs', '!dev'],
  argTypes: {
    label: {
      description: 'Select의 라벨을 설정합니다.',
    },
    labelAlign: {
      description: 'Select의 라벨 위치를 설정합니다.',
    },
    value: {
      description: '선택된 값을 정의합니다.',
    },
    menuList: {
      description: '선택 가능한 메뉴 목록을 설정합니다.',
    },
    variant: {
      description: 'Select 유형을 설정합니다.',
    },
    size: {
      description: 'Select 사이즈를 설정합니다.',
    },
    error: {
      description: 'Select의 Error 여부를 설정합니다..',
      control: 'boolean',
    },
    required: {
      description: '필수 선택 여부를 설정합니다.',
      control: 'boolean',
    },
    disabled: {
      description: 'Select의 비활성화 여부를 설정합니다. ',
      control: 'boolean',
    },
    readOnly: {
      description: 'Select의 읽기 전용 여부를 설정합니다.',
      control: 'boolean',
    },
    multiple: {
      description: 'Select의 다중 선택 여부를 설정합니다.',
      control: 'boolean',
    },
    placeholder: {
      description: 'Select의 placeholder를 설정합니다.',
      action: 'string',
    },
    helperText: {
      description: 'Select의 HelperText를 설정합니다.',
      action: 'string',
    },
  },
}

export default meta

type Story = StoryObj<SelectProps>

const Container = ({ children }: { children: ReactNode }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        paddingBlock: '50px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '50px' }}>{children}</div>
    </div>
  )
}

const DefaultTemplate = (args: SelectProps) => {
  const [select1, setSelect1] = useState<any>('')
  const handleSelect1Change = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelect1(e)
  }
  return (
    <div>
      <Select {...args} value={select1} onChange={handleSelect1Change} />
      <div style={{ fontSize: '13px', color: '#1975d2', marginTop: '20px' }}>
        선택된 값: {JSON.stringify(select1)}
      </div>
    </div>
  )
}

const AlignTemplate = (args: SelectProps) => {
  return (
    <Container>
      <Select {...args} label="vertical" labelAlign="vertical" />
      <Select {...args} label="horizontal" labelAlign="horizontal" />
    </Container>
  )
}

const VariantTemplate = (args: SelectProps) => (
  <Container>
    <Select {...args} label="outlined" variant="outlined" />
    <Select {...args} label="standard" variant="standard" />
  </Container>
)

const SizeTemplate = (args: SelectProps) => (
  <Container>
    <Select {...args} label="small" size="small" />
    <Select {...args} label="medium" size="medium" />
  </Container>
)

const StatusTemplate = (args: SelectProps) => (
  <Container>
    <Select {...args} label={'disabled'} disabled={true} />
    <Select {...args} label={'readOnly'} readOnly={true} />
    <Select {...args} label={'error'} error />
  </Container>
)

const MultipleTemplate = (args: SelectProps) => (
  <Container>
    <Select {...args} label={'Multi Select'} multiple />
  </Container>
)

export const Default: Story = {
  render: DefaultTemplate,
  args: {
    label: 'Label Name',
    placeholder: '선택해주세요',
    variant: 'outlined',
    size: 'small',
    required: true,
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText.',
    labelAlign: 'vertical',
  },
}

export const LabelAlign: Story = {
  render: AlignTemplate,
  args: {
    placeholder: '선택해주세요',
    required: true,
    value: '',
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText',
  },
}

export const Variant: Story = {
  render: VariantTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    size: 'small',
    required: true,
    value: '',
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText',
  },
}

export const Size: Story = {
  render: SizeTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    variant: 'outlined',
    required: true,
    value: '',
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText',
  },
}

export const Status: Story = {
  render: StatusTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    variant: 'outlined',
    value: { label: '망고', value: 'mango' },
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    helperText: 'This is HelperText',
  },
}

export const MultiSelect: Story = {
  render: MultipleTemplate,
  args: {
    label: 'Label',
    placeholder: '선택해주세요',
    variant: 'outlined',
    required: true,
    value: '',
    menuList: [
      { label: '사과', value: 'apple' },
      { label: '망고', value: 'mango' },
      { label: '수박', value: 'watermelon' },
      { label: '포도', value: 'grape' },
      { label: '배', value: 'pear' },
    ],
    menuKey: 'value',
    menuLabel: 'label',
    size: 'small',
    helperText: 'This is HelperText',
    multiple: true,
  },
}
