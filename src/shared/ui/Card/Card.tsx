import clsx from 'clsx';
import React from 'react';

type HeaderProps = {
  children?: React.ReactElement;
};

const Header = (props: HeaderProps) => {
  return (
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.children}
      </h5>
    </a>
  );
};

type BodyProps = {
  children?: React.ReactElement | React.ReactElement[];
};

const Body = (props: BodyProps) => {
  return (
    <div className="h-max flex flex-col gap-4 justify-between font-normal text-gray-700 dark:text-gray-400">
      {props.children}
    </div>
  );
};

type CardProps = {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
};

function Card({ children, className }: CardProps) {
  console.log(className);

  return (
    <div
      className={clsx(
        'pl-6 pr-6 pt-3 pb-3 align-text-top justify-start content-stretch  border border-gray-200 rounded shadow shadow-slate-50 dark:bg-gray-800 dark:border-gray-700' +
          ' h-full w-full',
        className
      )}
    >
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Body = Body;

export { Card };
