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
    <div className="flex h-12 flex-row justify-center gap-4">
      {/* <Button className="block w-full gap-2" onClick={() => {}}>
        <ListBulletIcon className="h-6 w-6 invert"></ListBulletIcon>
        Каталог товаров
      </Button> */}
      <input
        placeholder="Найти товары"
        type={'text'}
        className="flex-1 rounded border p-2"
      ></input>
      <div className="flex flex-row content-center items-center gap-4 ">
        <ShoppingCartIcon className="h-6 w-6 text-zinc-500 "></ShoppingCartIcon>
        <a className="hidden md:block">Корзина</a>
      </div>
    </div>
  );
};

export default ActionHeader;
