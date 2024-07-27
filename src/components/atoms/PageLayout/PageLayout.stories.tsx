import type { StoryFn, Meta } from '@storybook/react';
import { PageLayout } from '.';

const meta: Meta<typeof PageLayout> = {
  component: PageLayout,
};

export default meta;

const Template: StoryFn<typeof PageLayout> = (args) => (
  <PageLayout {...args}>コンテンツメイン</PageLayout>
);

export const Default = {
  render: Template,
};
