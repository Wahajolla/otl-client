import Link from 'next/link';
import { FC } from 'react';

export interface Link {
  breadcrumbName: String;
  path: string;
}

interface Props {
  links: Link[];
  title?: String;
}

const BreadCrumbs: FC<Props> = ({ links, title = 'Все товары' }) => {
  return (
    <div className="flex lg:flex-row content-between w-full items-baseline flex-col">
      <hr className="invisible lg:visible w-16 mr-1 self-center border border-t-1 text-secondary border-neutral-300" />
      <nav className="flex col-span-2 row-span-2 self-stretch">
        <ol className="inline-flex items-center">
          {links.map((link, index) => {
            return (
              <li className="inline-flex items-center" key={index}>
                {itemRender(link, links)}
              </li>
            );
          })}
        </ol>
      </nav>
      <hr className="flex-grow invisible lg:visible mr-1 ml-1 self-center border border-t-1 border-neutral-300" />
      <p className=" flex text-4xl text-primary ml-1 col-span-2 row-span-2">
        {title}
      </p>

      <hr className=" flex-grow invisible lg:visible ml-1 self-center border border-t-1 border-neutral-300" />
    </div>
  );
};

function itemRender(route: Link, routes: Link[]) {
  const last = routes.indexOf(route) === routes.length - 1;
  return last ? (
    <div className="text-gray-700 hover:text-gray-900 ml-1 text-base font-medium">
      {route.breadcrumbName}
    </div>
  ) : (
    <Link href={route.path} passHref>
      <a className="text-gray-700 hover:text-gray-900 ml-1 text-base font-medium">
        {route.breadcrumbName + ' /'}
      </a>
    </Link>
  );
}
export default BreadCrumbs;
