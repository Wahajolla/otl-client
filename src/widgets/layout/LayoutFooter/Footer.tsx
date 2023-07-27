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
        <Link href={''}>
          <div className="text-center">
            <MapPinIcon className="inline h-6  w-6"></MapPinIcon>{' '}
            <a className="text-zinc-400">Осташковское ш., вл1Бс7</a>
          </div>
        </Link>
        <Link href={''}>
          <div className="text-center">
            <ClockIcon className="inline h-6  w-6"></ClockIcon>{' '}
            <a className="text-zinc-400">9:00 - 19:00 | </a>
            <a className="text-zinc-400">воскресенье 9:00 - 18:00</a>
          </div>
        </Link>
        <Link href={''}>
          <div className="text-center">
            <PhoneIcon className="inline h-6 w-6"></PhoneIcon>{' '}
            <a className="text-zinc-400"> +7 (969) 049 63 92</a>
          </div>
        </Link>
        <Link href={''}>
          <div className="text-center">
            <EnvelopeIcon className="inline h-6 w-6"></EnvelopeIcon>{' '}
            <a className="text-zinc-400">info@otlivchik.ru</a>
          </div>
        </Link>
      </address>
    </footer>
  );
};

export default LayoutFooter;
