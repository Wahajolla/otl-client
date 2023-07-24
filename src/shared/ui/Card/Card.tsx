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
  className?: string;
};

const Body = (props: BodyProps) => {
  return (
    <div
      className={clsx(
        'flex flex-1 flex-col justify-start  gap-1 font-normal text-gray-700 dark:text-gray-400 md:gap-2 md:gap-4',
        props.className
      )}
    >
      {props.children}
    </div>
  );
};

type FooterProps = {
  children?: React.ReactElement;
};

const Footer = (props: FooterProps) => {
  return <>{props.children}</>;
};

type CardProps = {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
};

function Card({ children, className }: CardProps) {
  return (
    <article
      className={clsx(
        'flex flex-col content-stretch justify-start rounded  ' +
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
Card.Footer = Footer;

export { Card };
