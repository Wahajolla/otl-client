import { FC, PropsWithChildren, ReactNode } from 'react';
import { LayoutFooter } from '../LayoutFooter';
import { LayoutHeader } from '../LayoutHeader';
// eslint-disable-next-line boundaries/element-types

// eslint-disable-next-line boundaries/element-types

interface Props {
  children?: ReactNode;
  sider?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  sider,
  header,
  footer,
}) => {
  return (
    <main className="flex h-screen flex-col items-center">
      <LayoutHeader></LayoutHeader>
      {sider}
      <div className="w-full max-w-7xl flex-1 ">{children}</div>
      <LayoutFooter></LayoutFooter>
    </main>
  );
};

export default AppLayout;
