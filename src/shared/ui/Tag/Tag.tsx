import React from 'react';
import clsx from 'clsx';
type Props = {
  children: React.ReactNode;
  selected?: boolean;
  disabled?: boolean;
};

function Tag({ children, selected, disabled }: Props) {
  return (
    <div
      className={clsx(
        'm-1 inline-block rounded border p-1',

        selected && 'border-[var(--primary-color)]',
        disabled && 'opacity-30'
      )}
    >
      {children}
    </div>
  );
}

export default Tag;
