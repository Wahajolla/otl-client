import { CubeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { FC, useState } from 'react';

import { Category, CategoryItem } from '@/entities/category';
import { CategoryTree } from '@/entities/category/model/types';
import { Button } from '@/shared/ui';

interface Props {
  categories: CategoryTree[];
  onClick?: (clickedCategory: CategoryTree) => void;
  maxItems?: number;
}

const CategoryList: FC<Props> = ({ onClick, categories, maxItems = 20 }) => {
  return (
    <div className="grid grid-cols-2  gap-1 md:grid-cols-3 lg:grid-cols-4">
      {categories.map((category) => {
        return (
          <div key={category.id} className="flex flex-col gap-2">
            <Button
              block
              type="text"
              onClick={() => onClick && onClick(category)}
            >
              <a>{category.name}</a>
            </Button>

            {category?.treeChildren?.map((subCategory) => {
              return (
                <div key={subCategory.id} className="pl-2">
                  <Button
                    block
                    type="text"
                    onClick={() => onClick && onClick(subCategory)}
                  >
                    <p>{subCategory.name}</p>
                  </Button>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};

{
  /* <Link passHref href={'/catalogue/' + category.uuid}>
  <Button block type="text">
    <span>{icon}</span>
    <a>{category.name}</a>
  </Button>
</Link>; */
}

export { CategoryList };
