import { XMarkIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import React from 'react';
type Props = {
  collapsed: boolean;
  sider?: boolean;
  children?: React.ReactNode;
  header?: React.ReactNode;
};

export default function Overlay({ collapsed, children, sider, header }: Props) {
  return (
    <>
      <div
        className={clsx(
          'fixed left-0 top-0 z-50   h-full flex-col items-center overflow-hidden border bg-white p-4 transition-all',
          collapsed && 'hidden translate-x-[-100vw]',
          !collapsed && 'flex',
          sider && 'w-[calc(100vw-6rem)]',
          !sider && ' w-full'
        )}
      >
        {header}
        {children}
      </div>
      {sider && !collapsed && (
        <div className="fixed inset-0 z-40 bg-black opacity-60"></div>
      )}
    </>
  );
}
