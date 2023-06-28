import { FC, PropsWithChildren, ReactNode } from 'react';

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
    <div className=" min-h-full flex flex-col h-screen site-bg">
      {sider}
      <main className="mb-auto flex-grow">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      {footer}
    </div>
  );
};

export default AppLayout;
