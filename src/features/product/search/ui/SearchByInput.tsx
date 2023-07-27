import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react';

import { useSearchProductsQuery } from '@/entities/product';
import { useLazySearchProductsQuery } from '@/entities/product/api/product.api';
import { debounce } from '@/shared/lib/debounce';
import Input from '@/shared/ui/Form/Input/Input';
import Overlay from '@/shared/ui/overlay/overlay';
type Props = {};
const SEARCH_PRODUCT_TIMEOUT_MS = 500;

function SearchByInput({}: Props) {
  const [trigger, result, lastPromiseInfo] = useLazySearchProductsQuery({});
  const search = debounce((e) => {
    trigger({ search: e });
  }, SEARCH_PRODUCT_TIMEOUT_MS);

  return (
    <Input
      name={'Поиск товаров'}
      size={'m'}
      autoFocus
      ref={(ref) => ref?.focus()}
      placeholder={'Поиск товаров'}
      block
      onFocus={(e) => e.currentTarget.select()}
      onChange={(e) => search(e.target.value)}
      prefixAfter={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
    ></Input>
  );
}

export { SearchByInput };
