import type { Meta, StoryObj } from '@storybook/react';
import { ErrorApplicationFallback } from '.';

const meta = {
  component: ErrorApplicationFallback,
} satisfies Meta<typeof ErrorApplicationFallback>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
