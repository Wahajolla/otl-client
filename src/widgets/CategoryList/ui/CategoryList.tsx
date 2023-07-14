import { Bars4Icon, CubeIcon } from '@heroicons/react/24/outline';
import { sortBy } from 'lodash';
import Link from 'next/link';

import { useState, useEffect } from 'react';
import { FC } from 'react';
import { Category } from '@/entities/category';
import { Product, ProductCard } from '@/entities/product';

interface Props {
  categories: Category[];
  products: Product[];
  parentCategoryId?: number;
  title?: String;
}

interface CategoryTree {
  id: number;
  name: string;
  children: CategoryTree[];
}
const CategoryList: FC<Props> = ({
  categories,
  products,
  title = 'Все товары',
}) => {
  const [aside, setAside] = useState<boolean>(false);
  const handleResize = () => {
    if (window.innerWidth < 1280) {
      setAside(false);
    } else {
      setAside(true);
    }
  };
  //get non sorted categories as tree
  const getCategoriesTree = (categories: Category[]): CategoryTree[] => {
    const categoriesTree: CategoryTree[] = [];

    //sort ascending categories array by parent_id using lodash
    const sorted = sortBy(categories, ['parent_id']);

    sorted.forEach((category) => {
      if (category.parent_id === '0') {
        categoriesTree.push({
          id: +category.category_id,
          name: category.category,
          children: [],
        });
      } else {
        const parent = categoriesTree.find((x) => x.id === +category.parent_id);
        if (parent) {
          parent.children.push({
            id: +category.category_id,
            name: category.category,
            children: [],
          });
        }
      }
    });

    return categoriesTree;
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, []);
  return (
    <div className="min ">
      <div className="flex flex-col">
        <div className="flex w-full items-center justify-between p-2">
          <div className="flex items-center space-x-2">
            <button
              type="button"
              className="text-3xl visible 2xl:invisible xl:invisible"
              onClick={() => {
                setAside(!aside);
              }}
            >
              <Bars4Icon className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="flex">
          {
            <aside className="flex w-72 flex-col rounded-2xl  p-1 h-auto bg-white">
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
                        <Link
                          key={child.id}
                          href={'/catalog/' + child.id}
                          passHref
                        >
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
            </aside>
          }
          {/* </Transition> */}
          <div className="w-full">
            {/* <!-- main content page --> */}
            <div className="flex flex-row flex-wrap justify-center">
              {console.log(products)}
              {products.map((p) => {
                return (
                  <ProductCard
                    product={p}
                    key={p.product_id}
                    cardClick={function (): void {
                      throw new Error('Function not implemented.');
                    }}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export { CategoryList };
