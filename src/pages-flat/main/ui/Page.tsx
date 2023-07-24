import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { ReactElement } from 'react';
import { AppLayout } from '@/widgets/AppLayout';
import { NextSeo, OrganizationJsonLd, ProductJsonLd } from 'next-seo';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import Cards from './Cards/Cards';
import Contractors from './Contractors/Contractors';

interface Props {
  data: string;
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  return { props: { data: 'test' } };
};

const MainPage: NextPageWithLayout<
  InferGetServerSidePropsType<typeof getServerSideProps>
> = (props) => {
  return (
    <PageDefaultLayout>
      <OrganizationJsonLd
        type="HomeAndConstructionBusiness"
        id="https://www.otlivchik.ru/#contact"
        logo="https://www.otlivchik.ru/favicon.ico"
        legalName=""
        name="Отливчик"
        address={{
          streetAddress: 'Мытищи, Мытищинская ярмарка, Осташковское ш., вл1Бс7',
          addressLocality: 'Москва',
          addressRegion: 'Москва',
          GeolocationCoordinates: [55.89931, 37.678038],
          addressCountry: 'RU',
        }}
        contactPoint={[
          {
            telephone: '+7 (969) 049 63 92',
            contactType: 'Оформление заказа',
            email: 'info@otlivchik.ru',
            availableLanguage: ['Russian'],
          },
          {
            telephone: '+7 (963) 929-87-41',
            contactType: 'Во вопросам',
            email: 'info@otlivchik.ru',
            availableLanguage: ['Russian'],
          },
        ]}
        sameAs={['https://www.otlivchik.ru']}
        url="https://www.otlivchik.ru/"
      />
      <Cards></Cards>
      <Contractors></Contractors>
    </PageDefaultLayout>
  );
};

MainPage.getLayout = function getLayout(page: ReactElement) {
  return <AppLayout>{page}</AppLayout>;
};

export { MainPage };
