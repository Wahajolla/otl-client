import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function PageDefaultLayout({ children }: Props) {
  return (
    <div className="flex h-full flex-1 flex-col gap-4 pl-6 pr-6 lg:gap-8 lg:pl-8 lg:pr-8">
      {children}
    </div>
  );
}

export default PageDefaultLayout;
