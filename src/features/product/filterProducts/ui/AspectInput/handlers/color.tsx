import { ColorFilterCollection } from '../../../model/types';

import { CombinedFilter } from '@/entities/filter';

export const color = (filter: CombinedFilter) => {
  const value = filter as ColorFilterCollection;
  return (
    <div>
      <a>Цвет</a>
      <div className="flex flex-col gap-2">
        {value.values.map((e) => e.hex).toString()}
      </div>
    </div>
  );
};
