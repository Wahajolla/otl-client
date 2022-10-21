import { FC } from 'react';
import Footr from 'rc-footer';
import {
  ChatBubbleLeftEllipsisIcon,
  HomeIcon,
  InformationCircleIcon,
  MapPinIcon,
  QueueListIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import styles from './Footer.module.scss';
import 'rc-footer/assets/index.css';
import { rgb } from '@react-spring/shared';

export const Footer: FC = () => {
  return (
    <Footr
      className="border primary-bg text-secondary"
      theme="dark"
      columnLayout="space-between"
      columns={[
        {
          title: '',
          className: 'text-secondary',
          items: [
            {
              icon: <HomeIcon />,
              title: 'Главная',
              url: '/',
              openExternal: false,
              className:
                'text-secondary text-xl px-2 py-1 rounded-md hover:secondary-bg',
            },
            {
              icon: <QueueListIcon />,
              className:
                'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
              title: 'Каталог',
              url: '/catalog',
              openExternal: false,
            },
            {
              icon: <InformationCircleIcon />,
              className:
                'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
              title: 'О нас',
              url: '/about',
            },
          ],
        },
        {
          title: '',
          items: [
            {
              icon: <UserCircleIcon />,
              title: 'Контакты',
              url: '/contacts',
              openExternal: false,
              className:
                'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
            },
            {
              icon: <MapPinIcon />,
              title: 'Мы на карте',
              url: 'https://yandex.ru/maps/-/CCUZI-GAGD',
              openExternal: true,
              className:
                'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
            },
            {
              icon: <ChatBubbleLeftEllipsisIcon />,
              title: 'Отзывы',
              url: '#',
              className:
                'text-secondary text-xl px-3 py-2 rounded-md hover:secondary-bg',
            },
          ],
        },
      ]}
      bottom="Отливчик 2022"
    />
  );
};

export default Footer;
