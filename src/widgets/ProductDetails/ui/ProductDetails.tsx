import { formatPrice } from '@/entities/product/lib/formatPrice';
import { ProductWithDetails } from '@/entities/product/model/types';
import Button from '@/shared/ui/Button/Button';
import Image from 'next/image';
import React, { useState } from 'react';

type Props = {
  product: ProductWithDetails;
};

function ProductDetails({ product }: Props) {
  const specsNames = new Set(
    product.variations.flatMap((e) => e.specs).flatMap((e) => Object.keys(e))
  );
  Array(specsNames);

  interface SpecMapElement {
    key: Id;
    value: unknown;
  }

  const specsMap = Array.from(specsNames).map((e) => {
    const specValues = product.variations.map((v) => {
      return {
        key: v.specs[e].id,
        value: v.specs[e],
      } as unknown as SpecMapElement;
    });
    return {
      name: e,
      values: new Map(specValues.map((o) => [o.key, o.value])),
    };
  });
  console.log(specsMap);
  const [currentVariant, setCurrentVariant] = useState(
    product.variations[0] || null
  );
  if (!product) return <></>;

  return (
    <article className="grid grid-cols-1 px-4 py-2 md:grid-cols-2 md:flex-row">
      <div className="relative h-40 w-full md:h-60 md:w-full ">
        <Image
          alt="Текст"
          objectFit="contain"
          className="bottom-0 "
          layout="fill"
          src="/images/fason.png"
        ></Image>
      </div>
      <div>
        <h4>{product?.manufacturer?.name || 'Неизвестный производитель'}</h4>
        <h2 className="font-bold">{product.name}</h2>
        <h3>{'Размер'}</h3>
        <p>{product.description}</p>
        <h3>{'Цвет'}</h3>
        <p>{product.description}</p>
        <div className="flex flex-col gap-2 rounded-lg border p-4 text-red-900 shadow-sm">
          <h1 className="text-3xl font-bold text-red-900">
            {currentVariant?.price || formatPrice(1000, true)}
          </h1>
          <Button size="m">В корзину</Button>
        </div>
      </div>
      <div>
        <h3>{'О товаре'}</h3>
        <p>{product.description}</p>
      </div>
    </article>
  );
}

export { ProductDetails };
