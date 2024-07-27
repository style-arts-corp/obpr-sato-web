import type { Meta, StoryObj } from '@storybook/react';
import { SettingMenu } from '.';

const meta = {
  component: SettingMenu,
} satisfies Meta<typeof SettingMenu>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    defaultOpen: true,
    belongsName: 'テスト テナント',
    userName: 'テスト 太郎',
    email: 'john.doe@style-arts.jp',
    onChangeTenant: () => null,
    onLogout: () => null,
  },
};
