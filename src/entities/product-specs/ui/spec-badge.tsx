import React from 'react';

import { Color, Dimension, GenericSpec, Spec } from '../model/types';

import Tag from '@/shared/ui/Tag/Tag';


const specParse = (spec: Spec) => {
  switch (spec.uniqueName) {
    case 'dimension': {
      const value = spec as Dimension;
      return (
        <>
          {value.depth} {value.depthUnit} x {value.width} {value.widthUnit} x{' '}
          {value.height} {value.heightUnit}
        </>
      );
    }
    case 'color': {
      const value = spec as Color;
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
      const value = spec as GenericSpec;
      return <>{value.id}</>;
    }
  }
};

type Props = {
  spec: Spec;
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
