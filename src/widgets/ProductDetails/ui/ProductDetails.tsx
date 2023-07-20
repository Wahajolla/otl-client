import { Color, Dimension } from '@/entities/productSpecs';
import { formatPrice } from '@/entities/product/lib/formatPrice';
import { ProductWithDetails } from '@/entities/product/model/types';
import Button from '@/shared/ui/Button/Button';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import React, { useState } from 'react';
import { mapSpecsFromProductVariants } from '@/entities/product';
import { translateSpecName } from '@/entities/productSpecs/lib/translateSpecName';
import { SpecBadge } from '@/entities/productSpecs/ui/SpecBadge';
import { ProductSpecsNames } from '@/entities/productSpecs/model/types';

type Props = {
  product: ProductWithDetails;
};

function ProductDetails({ product }: Props) {
  const [currentVariant, setCurrentVariant] = useState(
    product.variations[0] || null
  );

  if (!product) return <></>;
  const specs = mapSpecsFromProductVariants(product);
  console.log(specs);

  return (
    <article className="grid grid-cols-1 gap-4   md:grid-cols-2 md:flex-row">
      <div className="col-span-2">
        <p>{product?.manufacturer?.name || 'Неизвестный производитель'}</p>
        <h1 className="text-2xl font-bold">{product.name}</h1>
      </div>
      <div className="relative col-span-2 h-60 w-full md:col-span-1 md:h-full md:w-full ">
        <Image
          alt="Текст"
          objectFit="contain"
          className="bottom-0 "
          layout="fill"
          src={product.image}
        ></Image>
      </div>
      <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
        <div>
          {specs.map((e, i) => {
            return (
              <>
                <h1>{translateSpecName(e.name)}</h1>
                <div>
                  {e.values.map((v, j) => (
                    <Button
                      key={e.name + v.id}
                      size={'s'}
                      type={'link'}
                      className="p-0"
                    >
                      <SpecBadge
                        spec={{
                          id: v.id,
                          name: v.name,
                          value: v.value,
                        }}
                        disabled={true}
                        selected={false}
                      ></SpecBadge>
                    </Button>
                  ))}
                </div>
              </>
            );
          })}
        </div>

        <div className="col-span-2  flex flex-col gap-2 rounded-lg border p-4 text-red-900 shadow-sm md:col-span-1">
          <h1 className="text-3xl font-bold text-red-900">
            {currentVariant?.price && formatPrice(currentVariant.price, true)}
          </h1>
          <Button size="m">
            <ShoppingCartIcon></ShoppingCartIcon> В корзину
          </Button>
          <p>Код товара: {currentVariant.sku}</p>

          <p>В наличии</p>
          <p className="text-3xl font-bold text-red-900">
            {currentVariant?.stock || formatPrice(1000, true)}
          </p>
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
