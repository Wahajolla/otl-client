import React from 'react';

import { compareSpecs } from '@/entities/product';
import { productSelectors } from '@/entities/product';
import { ProductWithDetails } from '@/entities/product/model/types';
import { Spec } from '@/entities/product-specs';
import { translateSpecName } from '@/entities/product-specs/lib/translateSpecName';
import {
  SelectVariantButton,
  updateVariationBySpec,
} from '@/features/product/selectVariantBySpec';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';

type Props = {
  product: ProductWithDetails;
};

export const ProductVariantSelection = ({ product }: Props) => {
  const dispatch = useAppDispatch();
  const specs = useAppSelector(productSelectors.specs);

  const availableSpecs = useAppSelector(productSelectors.availableSpecs);
  const selectedSpecs = useAppSelector(productSelectors.selectedSpecs);

  const updateVariation = (spec: Spec) => {
    dispatch(updateVariationBySpec({ spec: spec }));
  };

  return (
    <div>
      {specs.map((e) => {
        return (
          <div key={e.uuid}>
            <p>{translateSpecName(e.uuid)}</p>
            <div>
              {e.specs.map((v) => (
                <SelectVariantButton
                  selected={selectedSpecs.some((e) => compareSpecs(e, v))}
                  disabled={!availableSpecs.some((e) => compareSpecs(e, v))}
                  spec={v}
                  key={v.uuid + v.values.find((a) => a.name === 'id')?.value}
                  onClick={(e) => updateVariation(e)}
                ></SelectVariantButton>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};
