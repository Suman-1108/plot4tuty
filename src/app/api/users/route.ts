import { NextResponse } from 'next/server';
import { getUsers, saveUser } from '@/lib/storage';

export async function GET() {
  try {
    const users = await getUsers();
    return NextResponse.json({ success: true, users });
  } catch (error) {
    console.error('API Users GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch users' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const user = await saveUser(body);
    return NextResponse.json({ success: true, user }, { status: 201 });
  } catch (error) {
    console.error('API Users POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to save user' }, { status: 500 });
  }
}
