import Input from '@/shared/ui/Form/Input/Input';
import Overlay from '@/shared/ui/Overlay/Overlay';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline';
import React, { useRef, useState } from 'react';

type Props = {};
// <Overlay collapsed={collapsedSearch} header={}></Overlay>;

function SearchByInput({}: Props) {
  const ref = useRef('');
  return (
    <Input
      name={'Поиск товаров'}
      size={'m'}
      autoFocus
      ref={(ref) => ref?.focus()}
      placeholder={'Поиск товаров'}
      block
      onFocus={(e) => e.currentTarget.select()}
      onChange={(e) => (ref.current = e.currentTarget.value)}
      prefixAfter={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
    ></Input>
  );
}

export { SearchByInput };
