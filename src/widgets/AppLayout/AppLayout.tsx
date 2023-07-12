import { FC, PropsWithChildren, ReactNode } from 'react';
// eslint-disable-next-line boundaries/element-types
import { ActionHeader } from '../ActionHeader';
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
    <main className="flex flex-col h-screen items-center">
      {header}
      {sider}
      <div className="w-full max-w-7xl flex-1 ">{children}</div>
      {footer}
    </main>
  );
};

export default AppLayout;
