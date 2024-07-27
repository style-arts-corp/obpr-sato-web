import type { Meta, StoryObj } from '@storybook/react';
import { userEvent, within } from '@storybook/test';
import { NavSideBar } from '@/components/organisms/NavSideBar/NavSideBar';

const meta = {
  component: NavSideBar,
} satisfies Meta<typeof NavSideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

const openAccordionPlayFunc: Story['play'] = async ({ canvasElement }) => {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  const canvas = within(canvasElement.parentElement!);

  const accordionButtons = await canvas.findAllByRole('button');

  accordionButtons.forEach(async (button) => {
    await userEvent.click(button);
  });
};

export const Default: Story = {};

export const Open: Story = {
  play: openAccordionPlayFunc,
};
