import React from 'react';

import { getFilterItem } from './AspectInput/handlers';

import { CategoryWithDetails } from '@/entities/category';

type Props = {
  category: CategoryWithDetails;
};

const ProductsFilter = ({ category }: Props) => {
  return (
    <form className="flex flex-col">
      {category.availableFilters?.map((v) => {
        return <div key={v.label}>{getFilterItem(v)}</div>;
      })}
    </form>
  );
};

export { ProductsFilter };
