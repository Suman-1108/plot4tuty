import { NextResponse } from 'next/server';
import { getPayments, recordPayment } from '@/lib/storage';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sellerId = searchParams.get('sellerId');

    const payments = await getPayments();

    if (sellerId) {
      const sellerPayments = payments.filter((p) => p.sellerId === sellerId);
      return NextResponse.json({ success: true, payments: sellerPayments });
    }

    return NextResponse.json({ success: true, payments });
  } catch (error) {
    console.error('API Payments GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch payments' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payment = await recordPayment(body);
    return NextResponse.json({ success: true, payment }, { status: 201 });
  } catch (error) {
    console.error('API Payments POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to record payment' }, { status: 500 });
  }
}
