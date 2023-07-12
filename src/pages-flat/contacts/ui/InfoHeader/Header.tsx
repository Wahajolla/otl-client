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

export const InfoHeader: FC = () => {
  return (
    <address className="flex flex-row justify-between">
      <div className="text-center">
        <MapPinIcon className="w-6 h-6 text-zinc-500 inline"></MapPinIcon>{' '}
        <a>Осташковское ш., вл1Бс7</a>
      </div>
      <div className="text-center">
        <ClockIcon className="w-6 h-6 text-zinc-500 inline"></ClockIcon>{' '}
        <a>9:00 - 19:00 | </a>
        <a>воскресенье 9:00 - 18:00</a>
      </div>
      <div className="text-center">
        <PhoneIcon className="w-6 h-6 text-zinc-500 inline"></PhoneIcon>{' '}
        <a> +7 (969) 049 63 92</a>
      </div>
      <div className="text-center">
        <EnvelopeIcon className="w-6 h-6 text-zinc-500 inline"></EnvelopeIcon>{' '}
        <a>info@otlivchik.ru</a>
      </div>
    </address>
  );
};

export default InfoHeader;
