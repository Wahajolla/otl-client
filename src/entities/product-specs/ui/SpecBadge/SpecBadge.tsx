import React from 'react';

import { Spec } from '../../model/types';

import { getSpecBadge } from './handlers';

import Tag from '@/shared/ui/Tag/Tag';

type Props = {
  spec: Spec;
  disabled?: boolean;
  selected?: boolean;
};

function SpecBadge({ spec, disabled, selected }: Props) {
  return (
    <Tag disabled={disabled} selected={selected}>
      {getSpecBadge(spec)}
    </Tag>
  );
}

export { SpecBadge };
