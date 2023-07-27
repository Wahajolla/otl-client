import { useRouter } from 'next/router';
import { ReactElement } from 'react';

import Button from '@/shared/ui/button/button';
import PageDefaultLayout from '@/shared/ui/Layout/PageDefaultLayout';
import { AppLayout } from '@/widgets/layout/AppLayout';

export default function Page500({ props }) {
  const { push } = useRouter();

  return (
    <PageDefaultLayout>
      <div className="flex h-full w-full flex-col items-center justify-center">
        <h1 className="inline text-5xl">500</h1>

        <p>На сервере что-то пошло не так</p>
        <Button onClick={() => push('/')}>На главную</Button>
      </div>
    </PageDefaultLayout>
  );
}

Page500.getLayout = function getLayout(page: ReactElement) {
  return (
    <AppLayout>
      <>{page}</>
    </AppLayout>
  );
};
