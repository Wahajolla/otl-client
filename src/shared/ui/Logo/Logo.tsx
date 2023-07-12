import React from 'react';

type Props = {};

export default function Logo({}: Props) {
  return (
    <div className="hover: flex cursor-pointer flex-row gap-2 align-middle transition-all hover:opacity-75 hover:transition-all">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="h-6 w-6 text-orange-900"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 15.75l7.5-7.5 7.5 7.5"
        />
      </svg>
      <div className="text-red-900 before:absolute before:bottom-0 before:text-[0.5rem] before:content-['все_для_наружной_отделки'] after:w-full">
        отливчик
      </div>
    </div>
  );
}
