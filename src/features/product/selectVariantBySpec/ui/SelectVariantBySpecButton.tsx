import React from 'react';

import { SpecBadge } from '@/entities/product-specs';
import { Spec } from '@/entities/product-specs/model/types';
import Button from '@/shared/ui/button/button';

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
