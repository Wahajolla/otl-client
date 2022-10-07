import { FC } from 'react';
import Footr from 'rc-footer';
import styles from './Footer.module.scss';
import 'rc-footer/assets/index.css';

export const Footer: FC = () => {
  return (
    <Footr
    className=''
      theme="light"
      columnLayout="space-around"
      // columns={[
      //   {
      //     icon: (
      //       <img src="https://gw.alipayobjects.com/zos/rmsportal/XuVpGqBFxXplzvLjJBZB.svg" />
      //     ),
      //     title: 'fd',
      //     items: [
      //       {
      //         title: 'fcfifq',
      //       },
      //       {
      //         title: 'saaqq',
      //       },
      //     ],
      //     //description: '知识创作与分享工具',
      //     //openExternal: true,
      //   },
      // ]}
      columns={[
        {
          title: 'Меню',
          items: [
            {
              title: 'Главная',
              url: '/',
              openExternal: false,
            },
            {
              title: 'Каталог',
              url: '/catalog',
              openExternal: false,
            },
            {
              title: 'О нас',
              url: '/about',
            },
          ],
        },
        {
          title: '',
          items: [
            {
              title: 'Контакты',
              url: '/contacts',
              openExternal: false,
            },
            {
              title: 'Мы на карте',
              url: 'https://yandex.ru/maps/-/CCUZI-GAGD',
              openExternal: true,
            },
            {
              title: 'Отзывы',
              url: '#',
            },
          ],
        },
      ]}
      bottom="Отливчик 2022"
    />
  );
};

export default Footer;
