import { z } from 'zod';

const envVariables = z.object({
  BACKEND_URL: z.string(),
  PROXY_URL: z.string(),
});

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

export const config = {
  BACKEND_URL: process.env.BACKEND_URL,
  PROXY_URL: process.env.PROXY_URL,
  NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL,
  NEXT_PUBLIC_API_MOCKING: process.env.NEXT_PUBLIC_API_MOCKING,
} as const;
