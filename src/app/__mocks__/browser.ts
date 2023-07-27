import { setupWorker } from 'msw';

import { _mockCategory_ } from '@/entities/category';
import { _mockProduct_ } from '@/entities/product';

export const worker = setupWorker(
  ..._mockProduct_.handlers,
  ..._mockCategory_.handlers
);
