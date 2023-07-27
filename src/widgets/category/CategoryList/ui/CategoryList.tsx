import { CubeIcon } from '@heroicons/react/24/outline';
import { FC } from 'react';

import {
  Category,
  CategoryItem,
  mapCategoriesToTree,
} from '@/entities/category';

interface Props {
  categories: Category[];
  maxItems?: number;
}

const CategoryList: FC<Props> = ({ categories, maxItems = 20 }) => {
  return (
    <div className="grid h-full grid-cols-4">
      {mapCategoriesToTree(categories).map((category) => {
        return (
          <div key={category.id}>
            <CategoryItem
              category={category}
              icon={<CubeIcon width={6} height={6}></CubeIcon>}
            ></CategoryItem>
            {category.children?.slice(0, maxItems).map((subCategory) => {
              return (
                <div key={subCategory.id}>
                  <CategoryItem category={subCategory}></CategoryItem>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export { CategoryList };
