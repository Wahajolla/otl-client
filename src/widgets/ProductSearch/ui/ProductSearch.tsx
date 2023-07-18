import { SearchByInput } from '@/features/product/search';
import Input from '@/shared/ui/Form/Input/Input';
import Overlay from '@/shared/ui/Overlay/Overlay';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react';

type Props = {};
// <Overlay collapsed={collapsedSearch} header={}></Overlay>;

function ProductSearch({}: Props) {
  const [collapsedSearch, setCollapsedSearch] = useState(true);

  return (
    <>
      <Input
        name={'Поиск товаров'}
        size={'m'}
        placeholder={'Поиск товаров'}
        block
        onMouseDown={(e) => {
          e.preventDefault();
          setCollapsedSearch((prev) => !prev);
        }}
        prefixAfter={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
      ></Input>
      <Overlay
        collapsed={collapsedSearch}
        header={
          <div className="flex flex-row items-center justify-end">
            <SearchByInput></SearchByInput>
            <XMarkIcon
              onClick={() => setCollapsedSearch((prev) => !prev)}
              className=" h-8 w-8 cursor-pointer"
            ></XMarkIcon>
          </div>
        }
      >
        <>А тут будет лист товаров под поиск</>
      </Overlay>
    </>
  );
}

export { ProductSearch };
