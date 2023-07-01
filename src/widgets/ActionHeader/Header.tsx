import {
  MapPinIcon,
  ShoppingCartIcon,
  ListBulletIcon,
  ClockIcon,
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC } from 'react';
import Button from '@/shared/ui/Button/Button';
import styles from './Header.module.css';
const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';

export const ActionHeader: FC = () => {
  return (
    <div className="bg-slate-200 align-items-center p-6 rounded   border-gray-200 flex flex-col">
      <div className="align-middle w-full flex flex-col gap-4 ">
        <div className="flex flex-row gap-4 justify-between align-center">
          <Button className="flex flex-row gap-2">
            <ListBulletIcon className="w-6 h-6"></ListBulletIcon>
            Каталог товаров
          </Button>
          <input type={'text'} className="border flex-1 rounded"></input>
          <div className="flex flex-row gap-4 content-center items-center">
            {/* <a>Каталог</a> */}
            {/* <a>Контакты</a>
          <a>Компаниям</a> */}
            <UserCircleIcon className="w-6 h-6 text-zinc-500"></UserCircleIcon>
            <a>Вход</a>
            <ShoppingCartIcon className="w-6 h-6 text-zinc-500"></ShoppingCartIcon>
            <a>Корзина</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionHeader;
