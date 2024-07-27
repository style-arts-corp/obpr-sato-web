import type { Meta, StoryObj } from '@storybook/react';
import { Error403 } from '.';

const meta = {
  component: Error403,
} satisfies Meta<typeof Error403>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: 'Custom message',
  },
};
