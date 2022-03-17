import { Layout, Menu } from "antd";
import { FC } from "react";
import Footer from "../Footer";
import MainFooter from "../Footer";
import Header from "../Header";
import styles from "./AppLayout.module.scss";

const { Content, Sider } = Layout;

export const AppLayout: FC = ({ children }) => {
  return (
    <div>
      <Layout className={styles.layout}>
        <div className={styles.header}>
          <Header />
        </div>
        <Content className={styles.content}>{children}</Content>
        <Footer />
      </Layout>
    </div>
  );
};

export default AppLayout;
