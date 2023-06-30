import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC } from 'react';
import Button from '@/shared/ui/Button/Button';
import styles from './Header.module.css';
const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

export const LayoutHeader: FC = () => {
  return (
    <div className="pl-4 pr-4 h-14 w-full gap-6 mb-5 flex flex-row border-bottom border bg-white shadow-sm sticky top-0 border-gray-50 ">
      <div>
        <Image
          src={'/images/logo.png'}
          alt="Логотип"
          width={'60px'}
          height={'60px'}
          color={'transparent'}
        />{' '}
      </div>

      <div>Каталог</div>
      <div>Контакты</div>
      <div className="align-content-center flex-row flex gap-5  justify-content-center">
        <p>Ежедневно: 9:00 - 19:00</p>
        <p> Осташковское шоссе, вл1Бс7</p>
      </div>
      <div className="align-content-center justify-content-center">
        <a> +7 (969) 049 63 92</a>
        <p> info@otlivchik.ru</p>
      </div>

      <div className="ml-auto flex flex-row gap-2">
        <UserCircleIcon className="w-8 h-8"></UserCircleIcon>
        <ShoppingCartIcon className="w-8 h-8"></ShoppingCartIcon>
        Корзина
      </div>
    </div>
  );
};

export default LayoutHeader;
