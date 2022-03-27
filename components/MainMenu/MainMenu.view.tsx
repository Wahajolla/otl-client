import { Menu } from 'antd';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FC, useEffect } from 'react';
import styles from './MainMenu.module.scss';

const Item = Menu.Item;
const paths: string[] = ['/', '/about', '/catalog', '/deliver', '/contacts'];
export const MainMenu: FC = () => {
  const router = useRouter();
  const path = router.asPath;
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className={styles.headermenu}>
      <Menu
        mode="horizontal"
        className={styles.menuitems}
        inlineIndent={50}
        direction="ltr"
      >
        <Item>
          <Link href={paths[0]} key={paths[0]}>
            Главная
          </Link>
        </Item>
        <Item>Каталог</Item>
        <Item>Доставка</Item>
        <Item>Способы оплаты</Item>
        <Item>
          <Link href={paths[1]} key={paths[1]}>
            О нас
          </Link>
        </Item>
        <Item>
          <Link href={paths[4]} key={paths[4]}>
            Контакты
          </Link>
        </Item>
      </Menu>
    </div>
  );
};

export default MainMenu;
