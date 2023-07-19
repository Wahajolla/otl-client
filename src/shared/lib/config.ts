import { z } from 'zod';

const envVariables = z.object({
  BACKEND_URL: z.string(),
  PROXY_URL: z.string(),
});

// console.log(process.env);
// envVariables.parse(process.env);

declare global {
  interface ImportMetaEnv extends z.infer<typeof envVariables> {}
}

export const config = {
  BACKEND_URL: process.env.BACKEND_URL,
  PROXY_URL: process.env.PROXY_URL,
} as const;
