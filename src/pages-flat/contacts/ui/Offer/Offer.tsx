import clsx from 'clsx';
import Image from 'next';
import React, { Fragment } from 'react';

import styles from './Offer.module.css';

import Button from '@/shared/ui/button/button';
import { Card } from '@/shared/ui/card/card';
type Props = {};

function Offer({}: Props) {
  return (
    <div className=" grid grid-cols-3 items-stretch gap-4 sm:text-center lg:text-left ">
      {/* <Card className={clsx(styles.accentCard, 'col-span-2')}>
          <Card.Header>
            <h2 className="text-start">
              Гибка металла по <span className={styles.sizes}>размерам</span>
            </h2>
          </Card.Header>
          <Card.Body>
            <p>Гнем металл на заказ по размерам</p>
            <div className="flex flex-row">
              <div className="flex flex-col gap-4">
                <div>
                  <span className="bg-red-100 text-red-800  font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Размер два
                  </span>
                </div>
                <div>
                  <span className="bg-red-100 text-red-800  font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                    Размер два
                  </span>
                </div>
              </div>
              <img
                className="ml-auto  opacity-20  inset-0 mt-4"
                src="/images/bending.png"
                width={120}
              ></img>
            </div>
          </Card.Body>
        </Card> */}

      <Card className="h-full w-full">
        <Card.Header>
          <h2 className="text-start">Водосточные системы</h2>
        </Card.Header>
        <Card.Body>
          <p className="text-secondary">Водосточные системы</p>

          <img
            className="inset-0  ml-auto  mt-4 opacity-20"
            src="/images/drainage.png"
            width={80}
          ></img>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h2 className="text-start">Фасонные изделия</h2>
        </Card.Header>
        <Card.Body>
          <p className="text-secondary">Водосточные системы</p>
          <img
            className="inset-0  ml-auto  mt-4 opacity-20"
            src="/images/fason.png"
            width={80}
          ></img>
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h2 className="text-start">Кровельные материалы</h2>
        </Card.Header>
        <Card.Body>
          <p className="text-start">Кровельные материалы</p>
          <img
            className="inset-0  ml-auto  mt-4 opacity-20"
            src="/images/roof.png"
            width={80}
          ></img>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Offer;
