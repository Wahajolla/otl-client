import { Meta, StoryObj } from '@storybook/react';

import { Page } from '../ui/Page';

const meta: Meta<typeof Page> = {
  title: 'Pages/Catalogue',
  component: Page,
  parameters: {
    layout: 'fullscreen',
    appDirectory: true,
  },
};

export default meta;

type Story = StoryObj<typeof Page>;

export const Primary: Story = {
  args: {},
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};
