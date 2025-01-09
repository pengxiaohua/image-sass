import { NextRequest, NextResponse } from 'next/server';

import {
  createUserSchema,
  updateUserSchema,
} from '@/server/db/validate-schema';

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const name = query.get('name');
  const email = query.get('email');

  const result = updateUserSchema.safeParse({
    name,
    email,
  });
  if (result.data) {
    return NextResponse.json(result.data);
  }
  if (result.error) {
    return NextResponse.json(result.error);
  }
}
