import { CombinedFilter, FilterRange } from '@/entities/filter';
import { Input } from '@/shared/ui';

export const genericRange = (filter: CombinedFilter) => {
  const value = filter as FilterRange;
  return (
    <div>
      <a>{value.label}</a>
      <div className="flex flex-row gap-4">
        <Input name="from" value={value.minValue} prefix="от"></Input>
        <Input name="to" value={value.maxValue} prefix="до"></Input>
      </div>
    </div>
  );
};
