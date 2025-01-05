import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { NextRequest } from 'next/server';
import { createTRPCContext, testRouter } from '@/utils/trpc';

const handler = (request: NextRequest) => {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req: request,
    router: testRouter,
    createContext: createTRPCContext,
  });
};

export { handler as POST, handler as GET };
