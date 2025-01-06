import GithubProvider from 'next-auth/providers/github';
import { DrizzleAdapter } from '@auth/drizzle-adapter';
import { db } from '@/server/db/db';
import {
  AuthOptions,
  getServerSession as nextAuthGetServerSession,
} from 'next-auth';

export const authOptions: AuthOptions = {
  adapter: DrizzleAdapter(db),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
  ],
};

export function getServerSession() {
  return nextAuthGetServerSession(authOptions);
}
