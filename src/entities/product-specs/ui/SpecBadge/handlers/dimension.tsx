import { Dimension, Spec } from '@/entities/product-specs';

export const dimension = (spec: Spec) => {
  const value = Object.fromEntries(
    spec.values.map((v) => [v.name, v.value])
  ) as unknown as Dimension;
  return (
    <>
      {value.depth} {value.depthUnit} x {value.width} {value.widthUnit} x{' '}
      {value.height} {value.heightUnit}
    </>
  );
};
