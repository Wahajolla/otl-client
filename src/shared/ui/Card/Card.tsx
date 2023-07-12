import clsx from 'clsx';
import React from 'react';

type HeaderProps = {
  children?: React.ReactElement;
};

const Header = (props: HeaderProps) => {
  return <>{props.children}</>;
};

type BodyProps = {
  children?: React.ReactElement | React.ReactElement[];
};

const Body = (props: BodyProps) => {
  return (
    <div className="flex flex-1 flex-col justify-end  gap-1 font-normal text-gray-700 dark:text-gray-400 md:gap-2 md:gap-4">
      {props.children}
    </div>
  );
};

type CardProps = {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <article
      className={clsx(
        'flex flex-col content-stretch justify-start rounded border border-gray-200 px-4 py-3 shadow shadow-slate-50 dark:border-gray-700 dark:bg-gray-800 md:px-4 md:py-3' +
          'h-full w-full',
        className
      )}
    >
      {children}
    </article>
  );
}

Card.Header = Header;
Card.Body = Body;

export { Card };
