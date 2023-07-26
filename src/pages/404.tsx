import Button from '@/shared/ui/Button/Button';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { AppLayout } from '@/widgets/layout/AppLayout';
import { useRouter } from 'next/router';
import { ReactElement } from 'react';

export default function Page404({ props }) {
  const { push } = useRouter();

  return (
    <PageDefaultLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="inline text-5xl">404</h1>

        <p>
          Страница не найдена. Воспользуйтесь поиском или вернитесь на главную.
        </p>
        <Button onClick={() => push('/')}>На главную</Button>
      </div>
    </PageDefaultLayout>
  );
}

Page404.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <>{page}</>
    </AppLayout>
  );
};
