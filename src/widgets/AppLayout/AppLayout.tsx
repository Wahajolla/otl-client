import { FC, PropsWithChildren, ReactNode } from 'react';
// eslint-disable-next-line boundaries/element-types
import { ActionHeader } from '../ActionHeader';
// eslint-disable-next-line boundaries/element-types
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
    <div className="min-h-full flex flex-col h-screen ">
      <LayoutHeader></LayoutHeader>

      {sider}
      <main className="max-w-6xl ml-auto mr-auto">{children}</main>
      {footer}
    </div>
  );
};

export default AppLayout;
