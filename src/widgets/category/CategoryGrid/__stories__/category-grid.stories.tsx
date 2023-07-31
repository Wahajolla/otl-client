import { Meta, StoryObj } from '@storybook/react';

import { CategoryList } from '../ui/CategoryGrid';

import {
  mapCategories,
  mapCategoriesToTree,
  _mockCategory_,
} from '@/entities/category';

const _categories = mapCategoriesToTree(
  mapCategories(_mockCategory_.mockCategoriesDto())
);

const meta: Meta<typeof CategoryList> = {
  title: 'Widgets/Category/CategoryList',
  component: CategoryList,
};

export default meta;

type Story = StoryObj<typeof CategoryList>;

export const List: Story = {
  args: {
    categories: _categories,
    maxItems: 4,
  },
};
