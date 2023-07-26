import {
  MapPinIcon,
  ClockIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline';
import { FC } from 'react';
const link =
  'https://yandex.ru/maps/10740/mytischi/house/ostashkovskoye_shosse_vl1bs7/Z04YcABoSUYPQFtvfXR4eH9iZA==/?from=mapframe&l=trf%2Ctrfe&ll=37.678319%2C55.899228&source=mapframe&utm_source=mapframe&z=17.81';

// className = 'max-w-5xl ml-auto mr-auto';

export const InfoHeader: FC = () => {
  return (
    <address className="flex flex-row justify-between">
      <div className="text-center">
        <MapPinIcon className="inline h-6 w-6 text-zinc-500"></MapPinIcon>{' '}
        <a>Осташковское ш., вл1Бс7</a>
      </div>
      <div className="text-center">
        <ClockIcon className="inline h-6 w-6 text-zinc-500"></ClockIcon>{' '}
        <a>9:00 - 19:00 | </a>
        <a>воскресенье 9:00 - 18:00</a>
      </div>
      <div className="text-center">
        <PhoneIcon className="inline h-6 w-6 text-zinc-500"></PhoneIcon>{' '}
        <a> +7 (969) 049 63 92</a>
      </div>
      <div className="text-center">
        <EnvelopeIcon className="inline h-6 w-6 text-zinc-500"></EnvelopeIcon>{' '}
        <a>info@otlivchik.ru</a>
      </div>
    </address>
  );
};

export default InfoHeader;
