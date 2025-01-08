import type { Meta, StoryObj } from '@storybook/react';
import { Text } from './Text' // 컴포넌트 불러오기

// Storybook 메타데이터 설정
const meta: Meta<typeof Text> = {
  title: 'Example/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'],
      },
    },
    color: {
      control: 'color',
    },
    align: {
      control: {
        type: 'select',
        options: ['left', 'center', 'right', 'justify'],
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<typeof Text>;

// 기본 템플릿
export const Default: Story = {
  args: {
    variant: 'p',
    text: 'This is a default paragraph.',
    color: '#000',
    align: 'left',
  },
};
