import { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  title: 'Example/Container',
  component: Container,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'text',
      description: 'The width of the container',
      defaultValue: undefined,
    },
    backgroundColor: {
      control: 'color',
      description: 'Background color of the container',
      defaultValue: undefined,
    },
    children: {
      control: 'text',
      description: 'Content inside the container',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'This is a container with default styles defined in CSS.',
  },
};
