import { NextResponse } from 'next/server';

export function GET() {
  console.log('======>666');
  return NextResponse.json({ name: 'hello world' });
}
