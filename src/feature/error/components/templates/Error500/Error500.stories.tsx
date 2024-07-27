import type { Meta, StoryObj } from '@storybook/react';
import { Error500 } from '.';

const meta = {
  component: Error500,
} satisfies Meta<typeof Error500>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const CustomMessage: Story = {
  args: {
    message: 'Custom message',
  },
};
