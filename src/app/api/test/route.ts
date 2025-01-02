import { NextRequest, NextResponse } from 'next/server';
import z from 'zod';

const inputSchema = z.object({
  name: z.string().max(10).min(3),
  email: z.string().email(),
});

export function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams;
  const name = query.get('name');
  const email = query.get('email');

  //   try {
  //     const result = inputSchema.parse({
  //       name,
  //       email,
  //     });
  //     return NextResponse.json(result);
  //   } catch (err: any) {
  //     return NextResponse.json({ error: err.message });
  //   }
  const result = inputSchema.safeParse({
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
