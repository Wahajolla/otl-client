import { Meta, StoryObj } from '@storybook/react';

import { mockCategoryDetailsDtoByUuid } from '../__mocks__/mock-category-details-dto-by-uuid';
import { mapCategory } from '../lib/map-category';
import { Item } from '../ui/item/Item';

const meta: Meta<typeof Item> = {
  title: 'Entites/Category/Item',
  component: Item,
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Empty: Story = {
  args: {
    category: mapCategory(mockCategoryDetailsDtoByUuid()),
  },
};
