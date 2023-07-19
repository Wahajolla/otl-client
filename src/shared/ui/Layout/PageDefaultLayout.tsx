import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function PageDefaultLayout({ children }: Props) {
  return (
    <div className="flex h-full flex-1 flex-col gap-2 px-4 lg:gap-4 lg:px-8">
      {children}
    </div>
  );
}

export default PageDefaultLayout;
