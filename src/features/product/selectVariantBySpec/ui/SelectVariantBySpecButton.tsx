import { SpecBadge } from '@/entities/productSpecs';
import { Spec } from '@/entities/productSpecs/model/types';
import Button from '@/shared/ui/Button/Button';
import React from 'react';

type Props = {
  spec: Spec;
  disabled?: boolean;
  selected?: boolean;
  onClick: (spec: Spec) => void;
};

export const SelectVariantButton = ({
  spec,
  onClick,
  disabled,
  selected,
}: Props) => {
  return (
    <Button
      size={'s'}
      type={'text'}
      className="p-0"
      onClick={() => onClick(spec)}
    >
      <SpecBadge
        spec={spec}
        disabled={disabled}
        selected={selected}
      ></SpecBadge>
    </Button>
  );
};
