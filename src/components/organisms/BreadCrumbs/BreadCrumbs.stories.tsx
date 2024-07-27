import type { Meta, StoryObj } from '@storybook/react';
import { createRoute } from '@/lib/storybook/utils/createRoute';
import { BreadCrumbs } from './BreadCrumbs';

const meta = {
  component: BreadCrumbs,
} satisfies Meta<typeof BreadCrumbs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const FirstRoute: Story = {
  parameters: {
    reactRouter: createRoute({ path: '/' }),
  },
};

export const SecondRoute: Story = {
  parameters: {
    reactRouter: createRoute({
      path: '/demo/:id',
      pathParams: { id: '3' },
    }),
  },
};
