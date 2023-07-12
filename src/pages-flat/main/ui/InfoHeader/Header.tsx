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
import Logo from '@/shared/ui/Logo/Logo';

const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';

export const InfoHeader: FC = () => {
  return (
    <address className="grid grid-cols-1 gap-1 align-middle not-italic md:grid-cols-2 lg:grid-cols-3">
      <div>
        <MapPinIcon></MapPinIcon> <a>Осташковское ш., вл1Бс7</a>
      </div>
      <div>
        <ClockIcon></ClockIcon> <a>9:00 - 19:00 | </a>
        <a>вск. 9:00 - 18:00</a>
      </div>
      <div>
        <PhoneIcon></PhoneIcon> <a> +7 (969) 049 63 92</a>
      </div>
      <div>
        <EnvelopeIcon></EnvelopeIcon> <a>info@otlivchik.ru</a>
      </div>
    </address>
  );
};

export default InfoHeader;
