import { Meta, StoryObj } from '@storybook/react';

import { ProductList } from '../ui/ProductList';

import { mapProductDetails, _mockProduct_ } from '@/entities/product';

const _products = _mockProduct_.mockProductDtos().map(mapProductDetails);

const meta: Meta<typeof ProductList> = {
  title: 'Widgets/Product/ProductList',
  component: ProductList,
};

export default meta;

type Story = StoryObj<typeof ProductList>;

export const List: Story = {
  args: {
    products: _products,
  },
};
