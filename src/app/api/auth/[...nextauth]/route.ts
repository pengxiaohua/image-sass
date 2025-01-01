import NextAuth from 'next-auth';
import GithubProvider from 'next-auth/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/server/db/db';

// 1. 改为普通变量，而不是 export
const authOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

// 2. 构造一个处理器
const handler = NextAuth(authOptions);

// 3. 按照 Next.js App Router 规范导出 GET/POST
export { handler as GET, handler as POST };
