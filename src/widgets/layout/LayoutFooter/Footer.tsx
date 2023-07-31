import {
  ChatBubbleLeftEllipsisIcon,
  ClockIcon,
  EnvelopeIcon,
  HomeIcon,
  InformationCircleIcon,
  MapPinIcon,
  PhoneIcon,
  QueueListIcon,
  UserCircleIcon,
} from '@heroicons/react/24/outline';
import Moment from 'moment';
import Link from 'next/link';
import { FC } from 'react';

export const LayoutFooter: FC = () => {
  return (
    <footer className="mt-6 flex w-full flex-row  justify-center bg-slate-50 px-4 pb-2 pt-2">
      <address className="flex max-w-7xl flex-col justify-between gap-2 justify-self-center not-italic text-zinc-400 md:flex-row">
        <a className="text-center" href="https://yandex.ru/maps/-/CXUv47S">
          <MapPinIcon className="inline h-6  w-6"></MapPinIcon>{' '}
          <>Осташковское ш., вл1Бс7</>
        </a>

        <a className="text-center" href="https://yandex.ru/maps/-/CXUv47S">
          <ClockIcon className="inline h-6  w-6"></ClockIcon>{' '}
          <>9:00 - 19:00 | </>
          <>воскресенье 9:00 - 18:00</>
        </a>

        <a className="text-center" href={`tel:+7 (969) 049 63 92`}>
          <PhoneIcon className="inline h-6 w-6"></PhoneIcon>{' '}
          <> +7 (969) 049 63 92</>
        </a>

        <a className="text-center" href={`mailto:info@otlivchik.ru`}>
          <EnvelopeIcon className="inline h-6 w-6"></EnvelopeIcon>{' '}
          <>info@otlivchik.ru</>
        </a>
      </address>
    </footer>
  );
};

export default LayoutFooter;
