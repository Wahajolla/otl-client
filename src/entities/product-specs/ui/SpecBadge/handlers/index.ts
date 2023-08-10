import { color } from './color';
import { dimension } from './dimension';
import { generic } from './generic';

import { Spec } from '@/entities/product-specs/model/types';

const handlers: Record<string, (spec: Spec) => JSX.Element> = {
  color: color,
  dimension: dimension,
  generic: generic,
};

export const getSpecBadge = (spec: Spec) => {
  const handler = handlers[spec.uuid];
  if (!handler) return handlers['generic'](spec);
  return handler(spec);
};
