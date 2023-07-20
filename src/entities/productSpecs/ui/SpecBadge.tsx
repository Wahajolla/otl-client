import Tag from '@/shared/ui/Tag/Tag';
import React from 'react';
import {
  Color,
  Dimension,
  GenericProductSpec,
  ProductSpecsVariants,
} from '../model/types';

const specParse = (spec: ProductSpecsVariants) => {
  switch (spec.name) {
    case 'dimension': {
      const value = spec.value as Dimension;
      return (
        <>
          {value.depth} {value.depth_unit} x {value.width} {value.width_unit} x{' '}
          {value.height} {value.height_unit}
        </>
      );
    }
    case 'color': {
      const value = spec.value as Color;
      return (
        <>
          <div className=" flex flex-col justify-start">
            <div>
              <span>{value.name}</span>
            </div>
            <div className="align-items-center flex flex-row ">
              <span>RAL: {value.ralId} </span>
              <div
                style={{
                  backgroundColor: value.hex,
                }}
                className={`ml-1 inline-block h-4 w-4 rounded`}
              ></div>
            </div>
          </div>
        </>
      );
    }
    default: {
      const value = spec.value as GenericProductSpec;
      return <>{value.id}</>;
    }
  }
};

type Props = {
  spec: ProductSpecsVariants;
  disabled?: boolean;
  selected?: boolean;
};

function SpecBadge({ spec, disabled, selected }: Props) {
  return (
    <Tag disabled={disabled} selected={selected}>
      {specParse(spec)}
    </Tag>
  );
}

export { SpecBadge };
