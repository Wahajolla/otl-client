import { compareSpecs } from '@/entities/product';
import { productSelectors } from '@/entities/product';
import { ProductWithDetails } from '@/entities/product/model/types';
import { Spec } from '@/entities/productSpecs';
import { translateSpecName } from '@/entities/productSpecs/lib/translateSpecName';
import {
  SelectVariantButton,
  updateVariationBySpec,
} from '@/features/product/selectVariantBySpec';
import { useAppDispatch, useAppSelector } from '@/shared/model/hooks';
import React from 'react';

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
          <div key={e.spec_name}>
            <p>{translateSpecName(e.spec_name)}</p>
            <div>
              {e.specs.map((v) => (
                <SelectVariantButton
                  selected={selectedSpecs.some((e) => compareSpecs(e, v))}
                  disabled={!availableSpecs.some((e) => compareSpecs(e, v))}
                  spec={v}
                  key={v.spec_name + v.id}
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
