import { ShoppingCartIcon, UserCircleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC } from 'react';
import Button from '@/shared/ui/Button/Button';
import styles from './Header.module.css';
const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';

export const LayoutHeader: FC = () => {
  return (
    <div className="align-middle z-10 h-18 w-full  mb-5 border-bottom border bg-white shadow-sm sticky top-0 border-gray-50 ">
      <div className="pl-8 pt-2 pb-2  text-red-900 align-middle pr-8 max-w-6xl flex flex-row ml-auto mr-auto justify-between ">
        <div className="flex flex-row ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 text-orange-900"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
          отливчик
        </div>

        {/* <div>
          <a> Осташковское ш., вл1Бс7 - 9:00 - 19:00</a>
          <a> +7 (969) 049 63 92</a>
        </div>

        <a> info@otlivchik.ru</a> */}
        {/* <div className="flex flex-row gap-4 text-orange-900">
          <a>Каталог</a>
          <a>Контакты</a>
          <a>Компаниям</a>
        </div> */}
        <div className="flex flex-row gap-4">
          {/* <a>Каталог</a> */}
          <a>Контакты</a>
          <a>Компаниям</a>
          {/* <UserCircleIcon className="w-6 h-6 text-zinc-500"></UserCircleIcon>
          <ShoppingCartIcon className="w-6 h-6 text-zinc-500"></ShoppingCartIcon>
          <a>Корзина</a> */}
        </div>
      </div>
    </div>
  );
};

export default LayoutHeader;
