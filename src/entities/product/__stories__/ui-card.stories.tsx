import { Meta, StoryObj } from '@storybook/react';

import { mockProductDtoByUuid } from '../__mocks__/mock-product-dto-by-uuid';
import { mapProductDetails } from '../api/mapping/map-product-details';
import { Card } from '../ui/card/card';

const meta: Meta<typeof Card> = {
  title: 'Entites/Product/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Empty: Story = {
  args: {
    product: mapProductDetails(mockProductDtoByUuid()),
  },
};
