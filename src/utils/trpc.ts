import { authOptions } from '@/server/auth';
import { initTRPC, TRPCError } from '@trpc/server';
import { getServerSession } from 'next-auth';

export const createTRPCContext = async () => {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    throw new TRPCError({
      code: 'FORBIDDEN',
    });
  }

  return { session };
};

const t = initTRPC.context<typeof createTRPCContext>().create();

const { router, procedure } = t;

const middleware = t.middleware(async ({ ctx, next }) => {
  const start = Date.now();

  const result = await next();

  console.log('api time-------> ', Date.now() - start);

  return result;
});

const checkLoginMiddleware = t.middleware(async ({ ctx, next }) => {
  if (!ctx.session.user) {
    throw new TRPCError({
      code: 'FORBIDDEN',
    });
  }
  return next();
});

// 免登录的接口请求
const logProcedure = procedure.use(middleware);

// 需要用户登录的 qpi 请求
const protectedProcedure = procedure.use(checkLoginMiddleware);

export const testRouter = router({
  hello: logProcedure.query(async ({ ctx }) => {
    await new Promise((resolve) => {
      setTimeout(() => {
        resolve(null);
      }, 1000);
    });
    return {
      hello: 'world',
    };
  }),
});

export type TestRouter = typeof testRouter;
