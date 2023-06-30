import { FC, PropsWithChildren, ReactNode } from 'react';
import { LayoutHeader } from '../LayoutHeader';

interface Props {
  children?: ReactNode;
  sider?: ReactNode;
  footer?: ReactNode;
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({
  children,
  sider,
  footer,
}) => {
  return (
    <div className="min-h-full flex flex-col h-screen">
      <LayoutHeader></LayoutHeader>
      {sider}
      <main className="flex flex-col h-full">{children}</main>
      {footer}
    </div>
  );
};

export default AppLayout;
