import React from 'react';

type HeaderProps = {
  text?: string;
};

const Header = (props: HeaderProps) => {
  return (
    <a href="#">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {props.text}
      </h5>
    </a>
  );
};

type BodyProps = {
  children?: React.ReactElement | React.ReactElement[];
};

const Body = (props: BodyProps) => {
  return (
    <div className="mb-3 font-normal text-gray-700 dark:text-gray-400">
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
      className={
        'p-6 align-text-top justify-start content-stretch  border border-gray-50 rounded-lg shadow-sm shadow-slate-50 dark:bg-gray-800 dark:border-gray-700' +
        ' h-full w-full'
      }
    >
      {children}
    </div>
  );
}

Card.Header = Header;
Card.Body = Body;

export { Card };
