import { Meta, StoryObj } from '@storybook/react';

import { ProductCards } from '../ui/ProductsCards';

import { mapProductDetails, _mockProduct_ } from '@/entities/product';

const _products = _mockProduct_.mockProductDtos().map(mapProductDetails);

const meta: Meta<typeof ProductCards> = {
  title: 'Widgets/Product/ProductCards',
  component: ProductCards,
};

export default meta;

type Story = StoryObj<typeof ProductCards>;

export const List: Story = {
  args: {
    products: _products,
  },
};
