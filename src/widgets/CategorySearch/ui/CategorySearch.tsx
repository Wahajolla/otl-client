import { Category, useCategoriesQuery } from '@/entities/category';
import { useLazyCategoriesQuery } from '@/entities/category/api/categoryApi';
import { SearchByInput } from '@/features/product/search';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Form/Input/Input';
import Overlay from '@/shared/ui/Overlay/Overlay';
import { CategoryList } from '@/widgets/CategoryList';
import {
  ListBulletIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {
  initialCategories?: Category[];
};
// <Overlay collapsed={collapsedSearch} header={}></Overlay>;

function CategorySearch({ initialCategories }: Props) {
  const [collapsedSearch, setCollapsedSearch] = useState(true);
  const [trigger, searchedCategories, lastPromiseInfo] =
    useLazyCategoriesQuery();

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
        className="hidden gap-1 md:flex md:flex-row md:items-center"
        size="s"
      >
        <ListBulletIcon className="hidden md:block"></ListBulletIcon>
        Каталог
      </Button>

      <Overlay
        collapsed={collapsedSearch}
        header={
          <div className="flex flex-row items-center justify-between">
            <h1>Каталог</h1>
            <XMarkIcon
              onClick={() => setCollapsedSearch((prev) => !prev)}
              className=" h-8 w-8 cursor-pointer"
            ></XMarkIcon>
          </div>
        }
      >
        <CategoryList
          categories={
            initialCategories
              ? initialCategories
              : searchedCategories.currentData
          }
        ></CategoryList>
      </Overlay>
    </>
  );
}

export { CategorySearch };
