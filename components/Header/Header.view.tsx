import { Button } from 'antd';
import Image from 'next/image';
import { FC } from 'react';
import styles from './Header.module.scss';

const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

export const Header: FC = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header}>
        <Image
          src={'/../public/logo.png'}
          alt="Логотип"
          width={'95px'}
          height={'95px'}
          color={'transparent'}
        />{' '}
      </div>
      <div className={styles.infogroup}>
        <Button shape="round" ghost className={styles.worktime}>
          Ежедневно: 9:00 - 19:00
        </Button>
        <Button
          shape="round"
          href={link}
          target="_blank"
          rel="noreferrer"
          ghost
          className={styles.link}
        >
          Осташковское шоссе, вл1Бс7
        </Button>
      </div>
      <div className={styles.contactgroup}>
        <Button
          href={'tel:+7(969)0496392'}
          target="_blank"
          rel="noreferrer"
          shape="round"
          ghost
          className={styles.phone}
        >
          +7 (969) 049 63 92
        </Button>
        <Button
          href={'mail: info@otlivchik.ru'}
          target="_blank"
          rel="noreferrer"
          shape="round"
          ghost
          className={styles.phone}
        >
          info@otlivchik.ru
        </Button>
      </div>
    </div>
  );
};

export default Header;
