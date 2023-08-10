// import { color } from './color';
// import { dimension } from './dimension';
// import { generic } from './generic';
import { genericCollection } from './generic-collection';
import { genericRange } from './generic-range';

import { CombinedFilter } from '@/entities/filter';

const namedHandlers: Record<string, (filter: CombinedFilter) => JSX.Element> = {
  // color: color,
  // dimension: dimension,
  // generic: generic,
};

const genericHandlers: Record<string, (filter: CombinedFilter) => JSX.Element> =
  {
    collection: genericCollection,
    range: genericRange,
  };

export const getFilterItem = (filter: CombinedFilter) => {
  const namedHandler = namedHandlers[filter.type];
  if (!namedHandler) {
    const genericHandler = genericHandlers[filter.filterType];
    if (!genericHandler) return;
    return genericHandler(filter);
  }
  return namedHandler(filter);
};
