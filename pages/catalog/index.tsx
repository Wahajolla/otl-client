import CatalogCard from '@/components/Common/CatalogCard';
import { useEffect, useState } from 'react';
import { fetchCategories } from '~data/api/catalog.fetch';
import { Category } from '~types/cms.types';

const CatalogView = ({ categories }) => {
  const [cats, setCats] = useState<Category[]>([]);

  return (
    <div>
      <p className="text-center text-5xl font-bold">Категории</p>
      <div className="flex flex-wrap justify-center">
        {categories.map((cat: Category) => {
          //if (cat.parentId === null)
          return <CatalogCard category={cat} key={cat.id} />;
        })}
      </div>
    </div>
  );
};

export default CatalogView;

export async function getServerSideProps(context) {
  const categories = await fetchCategories();
  return {
    props: { categories },
  };
}
