import { SearchByInput } from '@/features/product/search';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Form/Input/Input';
import Overlay from '@/shared/ui/Overlay/Overlay';
import {
  ListBulletIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import React, { useState } from 'react';

type Props = {};
// <Overlay collapsed={collapsedSearch} header={}></Overlay>;

function CategorySearch({}: Props) {
  const [collapsedSearch, setCollapsedSearch] = useState(true);

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
          <div className="flex flex-row items-center justify-end">
            <h1>Каталог</h1>
            <XMarkIcon
              onClick={() => setCollapsedSearch((prev) => !prev)}
              className=" h-8 w-8 cursor-pointer"
            ></XMarkIcon>
          </div>
        }
      >
        <>А тут будет лист категорий</>
      </Overlay>
    </>
  );
}

export { CategorySearch };
