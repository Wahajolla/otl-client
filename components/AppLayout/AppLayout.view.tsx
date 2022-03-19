import { Layout, Menu } from 'antd';
import { FC } from 'react';
import Footer from '../Footer';
import Header from '../Header';
import MainMenu from '../MainMenu';
import styles from './AppLayout.module.scss';

const { Content, Sider } = Layout;

export const AppLayout: FC = ({ children }) => {
  return (
    <div>
      <Layout className={styles.layout}>
        <div className={styles.header}>
          <Header />
        </div>
        <div className={styles.mainmenu}>
          <MainMenu />
        </div>
        <Content className={styles.content}>{children}</Content>
        <div className={styles.footer}>
          <Footer />
        </div>
      </Layout>
    </div>
  );
};

export default AppLayout;
