import { Popover, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import Button from '@/shared/ui/Button/Button';
import { Card } from '@/shared/ui/Card/Card';

type Props = {};

function Offer({}: Props) {
  return (
    <div className="sm:text-center lg:text-left ">
      <div className="grid grid-cols-5 gap-4 items-stretch">
        <div className="col-span-2  ">
          <Card className="h-full w-full">
            <Card.Body>
              <h2 className="text-start">Гибка металла по размерам</h2>
              <p>Делаем отличивы от кого-то для чего-то по размером от и до</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card className="h-full w-full">
            <Card.Body>
              <h2 className="text-start">Водосточные системы</h2>
              <p className="text-secondary">Водосточные системы</p>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            <Card.Body>
              <h2 className="text-start">Фасонные изделия</h2>
            </Card.Body>
          </Card>
        </div>
        <div>
          <Card>
            {/* <Card.Header text="Гибка металла"></Card.Header> */}
            <Card.Body>
              <h2 className="text-start">Кровельные материалы</h2>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Offer;
