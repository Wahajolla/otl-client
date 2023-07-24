import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  selectProductVariation,
  productSelectors,
  compareSpecs,
} from '@/entities/product';
import { Spec } from '@/entities/productSpecs';

export const selectVariationBySpec = createAsyncThunk<
  void,
  { spec: Spec },
  { state: RootState }
>('product/selectVariation', async (payload, { dispatch, getState }) => {
  const spec = payload.spec;
  const state = getState();
  const variations = productSelectors.productVariations(state);
  const selectedSpecs = productSelectors.selectedSpecs(state);
  let newSpecs = [
    ...selectedSpecs.filter((e) => e.spec_name !== spec.spec_name),
    spec,
  ];
  let variationBySpecs = variations.find((v) =>
    v.specs.every((s) => newSpecs.every((n) => compareSpecs(s, n)))
  );
  if (!variationBySpecs) {
    variationBySpecs = variations.filter((v) =>
      v.specs.some((e) => compareSpecs(e, spec))
    )[0];
  }
  await dispatch(selectProductVariation(variationBySpecs));
});

//   const updateVariationBySpec = (spec: Spec) => {
//     if (selectedSpecs.includes(spec)) return;
//     let newSpecs = [
//       ...selectedSpecs.filter((e) => e.spec_name !== spec.spec_name),
//       spec,
//     ];

//     let selectedVariation = product.variations.find((v) =>
//       v.specs.every((s) => newSpecs.includes(s))
//     );
//     // if (
//     //   selectedVariation?.specs?.some((e) => availableSpecs.includes(e))
//     // ) {
//     //   selectedVariation = product.variations.filter((v) =>
//     //     v.specs.some((e) => e.spec_name === spec.spec_name && e.id === spec.id)
//     //   )[0];
//     // }

//     // if (!selectedVariation) {
//     //   selectedVariation = product.variations.filter((v) =>
//     //     v.specs.some((e) => e.spec_name === spec.spec_name && e.id === spec.id)
//     //   )[0];
//     // }
//     newSpecs = selectedVariation.specs;
//     availableSpecs.current = updateAvailableSpecs(newSpecs);

//     setSelectedSpec(newSpecs);
//     setCurrentVariant(selectedVariation);
//   };
