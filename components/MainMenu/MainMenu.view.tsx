import { Menu } from 'antd';
import { FC } from 'react';
import styles from './MainMenu.module.scss';

const Item = Menu.Item;
export const MainMenu: FC = () => {
  return (
    <div className={styles.headermenu}>
      <Menu
        mode="horizontal"
        className={styles.menuitems}
        inlineIndent={50}
        direction="ltr"
      >
        <Item>Главная</Item>
        <Item>Каталог</Item>
        <Item>Доставка</Item>
        <Item>Способы оплаты</Item>
        <Item>О нас</Item>
        <Item>Контакты</Item>
      </Menu>
    </div>
  );
};

export default MainMenu;
