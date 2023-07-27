import clsx from 'clsx';
import Link from 'next/link';
import { FC } from 'react';

import styles from './Breadcrumbs.module.css';

export interface BreadcrumbsItem {
  name: String;
  path: Url;
}

interface Props {
  links: BreadcrumbsItem[];
  className?: String;
}

const Breadcrumbs: FC<Props> = ({ links }) => {
  return (
    <nav className={clsx(styles.breadcrumbs)}>
      {links.map((link, index) => {
        return (
          <Link key={index} href={link.path}>
            <a
              className={clsx(
                styles['breadcrumbs-item'],
                ':last-child:text-xl'
              )}
            >
              {link.name}
            </a>
          </Link>
        );
      })}
    </nav>
  );
};

export { Breadcrumbs };
