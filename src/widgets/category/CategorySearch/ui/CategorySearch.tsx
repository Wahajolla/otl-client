import {
  ArrowLeftIcon,
  ListBulletIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useEffect, useRef, useState } from 'react';

import {
  Category,
  mapCategoriesToTree,
  useSearchCategoriesQuery,
} from '@/entities/category';
import { CategoryTree } from '@/entities/category/model/types';
import { Button, Overlay } from '@/shared/ui';
import { CategoryList } from '@/widgets/category/CategoryGrid';

type Props = {
  initialCategories: Category[];
};

const CATEGORY_LIST_MAX_SUBCATEGORIES = 5;

function CategorySearch({ initialCategories }: Props) {
  const [collapsedSearch, setCollapsedSearch] = useState(true);

  const [rootCategory, setRootCategory] = useState<CategoryTree>();
  const prevCategories = useRef<CategoryTree[]>();

  const searchedCategories = useSearchCategoriesQuery();
  const [currentCategoryTree, setCurrentCategoryTree] = useState(
    mapCategoriesToTree(searchedCategories.data || [])
  );

  useEffect(() => {
    if (searchedCategories.isSuccess && searchedCategories.data) {
      setCurrentCategoryTree(mapCategoriesToTree(searchedCategories.data));
    }
  }, [searchedCategories.data, searchedCategories.isSuccess]);

  const router = useRouter();

  const selectCategories = (category?: CategoryTree) => {
    setRootCategory(category);
    if (!category) {
      setCurrentCategoryTree(mapCategoriesToTree(searchedCategories.data!));
      return;
    }
    if (searchedCategories.data) {
      const childrenCategories = searchedCategories.data.filter(
        (e) => e.parentId === category.id
      );
      const subChildrenCategories = searchedCategories.data.filter((e) =>
        childrenCategories.some((a) => a.id === e.parentId)
      );

      setCurrentCategoryTree(
        mapCategoriesToTree(
          [...childrenCategories, ...subChildrenCategories],
          false
        )
      );
    }
  };

  useEffect(() => {
    if (!collapsedSearch) {
      setCollapsedSearch(true);
    }
  }, [router.asPath]);

  return (
    <>
      <Button
        onClick={(e) => setCollapsedSearch((prev) => !prev)}
        className="hidden gap-1  md:flex md:flex-row md:items-center"
        size="s"
        type="primary"
      >
        <ListBulletIcon className="hidden md:block"></ListBulletIcon>
        Каталог
      </Button>

      <Overlay
        collapsed={collapsedSearch}
        header={
          <div className="mt-2 flex w-full max-w-6xl flex-row items-center justify-between md:mt-20">
            <h1>
              {rootCategory ? (
                <>
                  <ArrowLeftIcon
                    className="cursor-pointer"
                    onClick={() => {
                      const _lastcat = prevCategories.current?.pop();
                      selectCategories(prevCategories.current?.pop());
                    }}
                  ></ArrowLeftIcon>
                  {rootCategory.name}
                </>
              ) : (
                'Каталог'
              )}
            </h1>
            <XMarkIcon
              onClick={() => setCollapsedSearch((prev) => !prev)}
              className=" h-8 w-8 cursor-pointer"
            ></XMarkIcon>
          </div>
        }
      >
        <div className="w-full max-w-6xl">
          <CategoryList
            categories={currentCategoryTree}
            onClick={(category) => {
              if (!prevCategories.current) prevCategories.current = [];
              prevCategories.current.push(category);
              if (category.treeChildren.length > 0) selectCategories(category);
              else router.push(`/catalogue/${category.uuid}`);
            }}
            maxItems={CATEGORY_LIST_MAX_SUBCATEGORIES}
          ></CategoryList>
        </div>
      </Overlay>
    </>
  );
}

export { CategorySearch };
