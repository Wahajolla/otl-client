import { FilterBoolean, CombinedFilter } from '@/entities/filter';

export const genericBoolean = (filter: CombinedFilter) => {
  return (
    <div>
      <a>{filter.label}</a>
      <div className="flex flex-row gap-4"></div>
    </div>
  );
};
