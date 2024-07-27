import type { Meta, StoryObj } from '@storybook/react';
import { createRoute } from '@/lib/storybook/utils/createRoute';
import { ContentTitle } from '.';

const meta = {
  component: ContentTitle,
} satisfies Meta<typeof ContentTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  parameters: {
    reactRouter: createRoute({
      path: '/',
    }),
  },
};

export const Props: Story = {
  args: {
    title: 'タイトル',
  },
};
