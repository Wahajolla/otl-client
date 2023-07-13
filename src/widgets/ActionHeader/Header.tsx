import {
  MapPinIcon,
  ShoppingCartIcon,
  ListBulletIcon,
  ClockIcon,
  UserCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';
import { FC } from 'react';
import Button from '@/shared/ui/Button/Button';
import Input from '@/shared/ui/Form/Input/Input';
import styles from './Header.module.css';
const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';

export const ActionHeader: FC = () => {
  return (
    <div className=" flex max-w-7xl flex-row justify-start gap-4 p-2 ">
      <Button type="primary" size="m">
        <ListBulletIcon></ListBulletIcon>
        Каталог
      </Button>
      <Input
        name={'Поиск товаров'}
        size={'l'}
        placeholder={'Поиск товаров'}
        block
        prefixAfter={<MagnifyingGlassIcon></MagnifyingGlassIcon>}
        onChange={() => {
          console.log('kek');
        }}
        onPressEnter={() => console.log('test')}
      ></Input>
      <div className="flex flex-row content-center items-center gap-4 ">
        <ShoppingCartIcon></ShoppingCartIcon>
        <UserIcon></UserIcon>
      </div>
    </div>
  );
};

export default ActionHeader;
