import { setupServer } from 'msw/node';

import { _mockCategory_ } from '@/entities/category';
import { _mockProduct_ } from '@/entities/product';

export const server = setupServer(
  ..._mockProduct_.handlers,
  ..._mockCategory_.handlers
);
