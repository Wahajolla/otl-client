import { Meta, StoryObj } from '@storybook/react';

import { mockProductDtoByUuid } from '../__mocks__/mock-product-dto-by-uuid';
import { mapProductDetails } from '../lib/map-product-details';
import { Item } from '../ui/item/item';

const meta: Meta<typeof Item> = {
  title: 'Entites/Product/Item',
  component: Item,
};

export default meta;

type Story = StoryObj<typeof Item>;

export const Empty: Story = {
  args: {
    product: mapProductDetails(mockProductDtoByUuid()),
  },
};
