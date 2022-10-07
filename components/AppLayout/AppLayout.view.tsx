import { FC, Fragment, PropsWithChildren, ReactNode } from 'react';

import Footer from '../Footer';
import Header from '../Header';
import MainMenu from '../MainMenu';
//import styles from './AppLayout.module.scss';
interface Props {
  cheildren?: ReactNode;
}

export const AppLayout: FC<PropsWithChildren<Props>> = ({ children }) => {
  return (
    <div className=" min-h-full flex flex-col h-screen">
      <MainMenu />

      <main className="mb-auto flex-grow">
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
