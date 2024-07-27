import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Presenter';

const meta = {
  component: Header,
} satisfies Meta<typeof Header>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isProduction: false,
    belongsName: 'テスト テナント',
    userName: 'テスト 太郎',
    email: 'john.doe@style-arts.jp',
    defaultOpen: true,
    onLogout: () => null,
    onChangeTenant: () => null,
  },
};

export const Production: Story = {
  args: {
    isProduction: true,
    belongsName: 'テスト テナント',
    userName: 'テスト 太郎',
    email: 'john.doe@style-arts.jp',
    defaultOpen: true,
    onLogout: () => null,
    onChangeTenant: () => null,
  },
};
