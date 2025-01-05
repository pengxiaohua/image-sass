import NextAuth from 'next-auth';

import { authOptions } from '@/server/auth';

// 构造一个处理器
const handler = NextAuth(authOptions);

// 按照 Next.js App Router 规范导出 GET/POST
export { handler as GET, handler as POST };
