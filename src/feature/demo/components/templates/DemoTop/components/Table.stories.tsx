import type { Meta, StoryObj } from '@storybook/react';
import { Table } from '@/feature/demo/components/templates/DemoTop/components/Table';

const meta = {
  component: Table,
} satisfies Meta<typeof Table>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    rows: [
      {
        id: 1,
        order: 30,
        description: '低',
        name: 'Low',
      },
      {
        id: 2,
        order: 50,
        description: '中',
        name: 'Middle',
      },
    ],
  },
};
