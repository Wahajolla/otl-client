import { Layout } from 'antd';
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
    <div className="min-h-full">
      <MainMenu />

      <main>
        <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
          {/* Replace with your content */}
          {children}
          {/* /End replace */}
        </div>
      </main>
      <Footer />
    </div>
    // {/* <Layout className={styles.layout}>
    //   <div className={styles.header}>
    //     <Header />
    //   </div>
    //   <div className={styles.mainmenu}>
    //     <MainMenu />
    //   </div>
    //   <Content className={styles.content}>{children}</Content>
    //   <div className={styles.footer}>
    //     <Footer />
    //   </div>
    // </Layout> */}
  );
};

export default AppLayout;
