import clsx from 'clsx';
import React from 'react';
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
