import type { Meta, StoryObj } from '@storybook/react';
import { Error401 } from '.';

const meta = {
  component: Error401,
} satisfies Meta<typeof Error401>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: 'Custom message',
  },
};
