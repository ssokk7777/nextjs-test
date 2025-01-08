import type { StoryObj } from '@storybook/react'
import { Stack } from './Stack'
import { FunctionComponent } from 'react'
import { Args } from '@storybook/csf'

interface IMeta {
  title: string
  component : FunctionComponent
  tags: string[]
  args?: object
  argTypes: object
  render?: any
}

const meta: IMeta = {
  title: 'Components/Stack',
  component: Stack,
  tags: ['autodocs', '!dev'],
  argTypes: {
    children: {
      description: 'children 요소를 설정합니다.',
    },
    direction: {
      table: {
        subcategory: 'align',
        control: {
          type: 'radio',
        },
        options: [
          'row',
          'row-reverse',
          'column',
          'column-reverse',
        ]
      },
      description: '방향을 설정합니다.',
    },
    alignItems: {
      table: {
        subcategory: 'align',
        control: {
          type: 'radio',
        },
        options: ['start', 'center', 'end', 'stretch']
      },
      description: '위쪽, 가운데, 아래쪽 맞춤을 설정합니다.',
    },
    justifyContent: {
      table: {
        subcategory: 'align',
        control: {
          type: 'radio',
        },
        options: [
          'start',
          'center',
          'end',
          'space-between',
          // 'space-around',
          // 'space-evenly'
        ]
      },
      description: '왼쪽, 가운데, 오른쪽 맞춤을 설정합니다.',
    },
    spacing: {
      control: { type: 'range', min: 1, max: 1000, step: 1 },
      description: '자식 요소 간격을 조정합니다.'
    },
  }
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    spacing: 10,
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  render: (args: Args) => {
    return (
      <Stack
        direction={args.direction}
        spacing={args.spacing}
        alignItems={args.alignItems}
        justifyContent={args.justifyContent}
      >
        <div style={{ border: '1px solid lightGrey', borderRadius: 5, padding: 5 }}>Container 1</div>
        <div style={{ border: '1px solid lightGrey', borderRadius: 5, padding: 5 }}>Container 2</div>
        <div style={{ border: '1px solid lightGrey', borderRadius: 5, padding: 5 }}>Container 3</div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Stack
  spacing={10}
  direction='row'
  alignItems='center'
  justifyContent='center'
>
  <div>Container 1</div>
  <div>Container 2</div>
  <div>Container 3</div>
</Stack>
        `,
      },
    },
  },
}

export const Spacing: Story = {
  args: {
    spacing: 100,
    direction: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  render: (args: Args) => {
    return (
      <Stack
        direction={args.direction}
        spacing={args.spacing}
        alignItems={args.alignItems}
        justifyContent={args.justifyContent}
      >
        <div style={{ border: '1px solid lightGrey', borderRadius: 5, padding: 5 }}>Container 1</div>
        <div style={{ border: '1px solid lightGrey', borderRadius: 5, padding: 5 }}>Container 2</div>
        <div style={{ border: '1px solid lightGrey', borderRadius: 5, padding: 5 }}>Container 3</div>
      </Stack>
    );
  },
  parameters: {
    docs: {
      source: {
        code: `
<Stack
  spacing={100}
  direction='row'
  alignItems='center'
  justifyContent='center'
>
  <div>Container 1</div>
  <div>Container 2</div>
  <div>Container 3</div>
</Stack>
        `,
      },
    },
  },
}
