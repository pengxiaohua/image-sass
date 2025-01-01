import { NextResponse } from 'next/server';

export async function GET() {
  // 可以获取 params.id
  console.log('ID from route param:');

  // 返回 JSON 响应
  return NextResponse.json({
    message: `Hello!`,
  });
}
