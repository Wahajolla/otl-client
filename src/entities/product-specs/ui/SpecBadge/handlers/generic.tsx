import { Spec } from '@/entities/product-specs';

export const generic = (spec: Spec) => {
  const value = spec;
  return <>{value.values.toString()}</>;
};
