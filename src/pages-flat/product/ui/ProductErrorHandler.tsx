import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import error from 'next/error';
import React from 'react';

type Props = {
  error: FetchBaseQueryError | SerializedError | undefined;
};

const ProductErrorHandler = ({ error }: Props) => {
  return <div>ProductErrorHandler</div>;
};

export { ProductErrorHandler };
