import type { Decorator } from '@storybook/react';
import { PageLayout } from '@/components/atoms/PageLayout';

export const WithPageLayoutDecorator: Decorator = (Story) => (
  <PageLayout>
    <Story />
  </PageLayout>
);
