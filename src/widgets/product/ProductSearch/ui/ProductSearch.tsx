import { productSelectors } from '@/entities/product';
import { SearchByInput } from '@/features/product/search';
import { useAppSelector } from '@/shared/model/hooks';
import Input from '@/shared/ui/Form/Input/Input';
import Overlay from '@/shared/ui/Overlay/Overlay';
import { ProductList } from '@/widgets/product/ProductList';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

type Props = {};
// <Overlay collapsed={collapsedSearch} header={}></Overlay>;

function ProductSearch({}: Props) {
  const [collapsedSearch, setCollapsedSearch] = useState(true);
  const products = useAppSelector(productSelectors.products);
  const router = useRouter();

  useEffect(() => {
    if (!collapsedSearch) {
      setCollapsedSearch(true);
    }
  }, [router.asPath]);

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
        <ProductList products={products}></ProductList>
      </Overlay>
    </>
  );
}

export { ProductSearch };
