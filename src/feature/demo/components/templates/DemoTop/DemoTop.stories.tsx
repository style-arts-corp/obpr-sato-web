import type { Meta, StoryObj } from '@storybook/react';
import { DemoTop } from '@/feature/demo/components/templates/DemoTop/DemoTop';
import { WithPageLayoutDecorator } from '@/lib/storybook/decorators/WithPageLayoutDecorator';
import { createRoute } from '@/lib/storybook/utils/createRoute';

const meta = {
  component: DemoTop,
  decorators: [WithPageLayoutDecorator],
  parameters: {
    reactRouter: createRoute({ path: '/demo' }),
  },
} satisfies Meta<typeof DemoTop>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isLoading: false,
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
