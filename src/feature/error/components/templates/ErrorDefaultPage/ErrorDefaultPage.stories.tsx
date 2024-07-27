import type { Meta, StoryObj } from '@storybook/react';
import { ErrorDefaultPage } from '.';

const meta = {
  component: ErrorDefaultPage,
} satisfies Meta<typeof ErrorDefaultPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
