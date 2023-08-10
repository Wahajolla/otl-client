import { FilterCollection, CombinedFilter } from '@/entities/filter';
import { Button } from '@/shared/ui';

export const genericCollection = (filter: CombinedFilter) => {
  const value = filter as FilterCollection;
  return (
    <div>
      <a>{value.label}</a>
      <div className="flex flex-row gap-4">
        {value.values.map((v) => (
          <div key={v.id}>{v.label}</div>
        ))}
      </div>
    </div>
  );
};
