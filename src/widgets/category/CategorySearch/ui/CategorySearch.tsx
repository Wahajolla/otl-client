import { Category } from '@/entities/category';
import { useSearchCategoriesQuery } from '@/entities/category/api/categoryApi';
import Button from '@/shared/ui/Button/Button';
import Overlay from '@/shared/ui/Overlay/Overlay';
import { CategoryList } from '@/widgets/category/CategoryList';
import { ListBulletIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {
  initialCategories: Category[];
};

const CATEGORY_LIST_MAX_SUBCATEGORIES = 5;

function CategorySearch({ initialCategories }: Props) {
  const [collapsedSearch, setCollapsedSearch] = useState(true);

  const searchedCategories = useSearchCategoriesQuery();

  const router = useRouter();

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
            <h1>Каталог</h1>
            <XMarkIcon
              onClick={() => setCollapsedSearch((prev) => !prev)}
              className=" h-8 w-8 cursor-pointer"
            ></XMarkIcon>
          </div>
        }
      >
        <div className="w-full max-w-6xl">
          {searchedCategories.data && (
            <CategoryList
              categories={searchedCategories.data}
              maxItems={CATEGORY_LIST_MAX_SUBCATEGORIES}
            ></CategoryList>
          )}
        </div>
      </Overlay>
    </>
  );
}

export { CategorySearch };
