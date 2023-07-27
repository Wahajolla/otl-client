import { BreadcrumbJsonLd, NextSeo, ProductJsonLd } from 'next-seo';
import React from 'react';

import { ProductWithDetails } from '@/entities/product';
import { Color } from '@/entities/product-specs';
import { config } from '@/shared/lib/config';

type Props = {
  productDetails: ProductWithDetails;
};

const ProductSeoHead = ({ productDetails }: Props) => {
  return (
    <>
      <NextSeo
        title={productDetails.name}
        description={productDetails.description}
        canonical={`${config.NEXT_PUBLIC_URL}/products/${productDetails.id}`}
        openGraph={{
          url: `${config.NEXT_PUBLIC_URL}/products/${productDetails.id}`,
          title: productDetails.name,
          description: productDetails.description,
          images: [
            {
              url: productDetails.image,
              alt: productDetails.name,
            },
          ],
          siteName: 'Отливчик.ру',
        }}
      ></NextSeo>
      <BreadcrumbJsonLd
        itemListElements={[
          {
            position: 1,
            name: 'Главная',
            item: config.NEXT_PUBLIC_URL,
          },
          {
            position: 2,
            name: 'Каталог',
            item: `${config.NEXT_PUBLIC_URL}/catalogue`,
          },
          {
            position: 3,
            name: `${productDetails.category?.name}`,
            item: `${config.NEXT_PUBLIC_URL}/category/${productDetails.category?.id}`,
          },
          {
            position: 4,
            name: `${productDetails.name}`,
            item: `${config.NEXT_PUBLIC_URL}/products/${productDetails.id}`,
          },
        ]}
      />

      {productDetails.variations.map((v) => {
        <ProductJsonLd
          productName={productDetails.name}
          description={productDetails.description}
          color={
            (v.specs?.find((s) => s.uniqueName === 'color') as Color)?.name
          }
          sku={v.sku.toString()}
          manufacturerName={productDetails.manufacturer?.name}
          offers={[
            {
              price: v.price,
              priceCurrency: 'RUB',
              itemCondition: 'https://schema.org/NewCondtition',
              availability:
                v.stock > 0
                  ? 'https://schema.org/InStock'
                  : 'https://schema.org/PreOrder',
              url: `${config.NEXT_PUBLIC_URL}/products/${productDetails.id}#?sku=${v.sku}`,
              seller: {
                name: 'Отливчик',
              },
            },
          ]}
        />;
      })}
    </>
  );
};

export { ProductSeoHead };
