import { Bars4Icon, CubeIcon } from '@heroicons/react/24/outline';
import { sortBy } from 'lodash';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { FC } from 'react';
import { Category } from '@/entities/category';
import { Product, ProductCard } from '@/entities/product';

interface Props {
  categories: Category[];
}

interface CategoryTree {
  id: number;
  name: string;
  children: CategoryTree[];
}
const CategoryList: FC<Props> = ({ categories }) => {
  const getCategoriesTree = (categories: Category[]): CategoryTree[] => {
    const categoriesTree: CategoryTree[] = [];

    //sort ascending categories array by parent_id using lodash
    const sorted = sortBy(categories, ['parent_id']);

    sorted.forEach((category) => {
      const parent = categoriesTree.find((x) => x.id === category.parentId);
      if (parent) {
        parent.children.push({
          id: +category.parentId,
          name: category.name,
          children: [],
        });
      }
    });

    return categoriesTree;
  };

  return (
    <div className="min ">
      {getCategoriesTree(categories).map((el) => {
        return (
          <div
            key={el.id}
            //
          >
            <div>
              <Link href={'/catalog/' + el.id} passHref>
                <div className="flex items-center space-x-1 rounded-md px-2 py-2 hover:bg-gray-100 hover:text-blue-600">
                  <span className="text-xl">
                    <CubeIcon className="h-6 w-6" />
                  </span>
                  <span>{el.name}</span>
                </div>
              </Link>
            </div>
            {el.children.map((child) => {
              return (
                <Link key={child.id} href={'/catalog/' + child.id} passHref>
                  <div className="flex items-center space-x-1 rounded-md px-5 hover:bg-gray-100 hover:text-blue-600">
                    <span className="text-l">
                      <CubeIcon className="h-5 w-5" />
                    </span>
                    <span className="text-base">{child.name}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export { CategoryList };
