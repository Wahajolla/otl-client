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
      <div className="mb-0 flex flex-col leading-3 text-red-900">
        <span>отливчик</span>
        <span className="text-[0.6rem] text-red-900">
          все для наружной отделки
        </span>
      </div>
    </div>
  );
}
