import { FaceFrownIcon } from '@heroicons/react/24/outline';
import React from 'react';

type Props = {
  width: number;
  height: number;
};

function SkeletonImage({ width, height }: Props) {
  return (
    <div className="h-full w-full rounded bg-[var(--secondary-color)]">
      <FaceFrownIcon width={'100%'} height={'100%'}></FaceFrownIcon>
    </div>
  );
}

export default SkeletonImage;
