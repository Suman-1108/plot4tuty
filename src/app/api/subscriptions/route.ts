import { NextResponse } from 'next/server';
import { getSubscriptionPlans, getSubscriptions, getSellerSubscription, saveSubscription } from '@/lib/storage';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const sellerId = searchParams.get('sellerId');

    const plans = getSubscriptionPlans();

    if (sellerId) {
      const activeSubscription = await getSellerSubscription(sellerId);
      return NextResponse.json({ success: true, plans, activeSubscription });
    }

    const subscriptions = await getSubscriptions();
    return NextResponse.json({ success: true, plans, subscriptions });
  } catch (error) {
    console.error('API Subscriptions GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch subscriptions' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.sellerId || !body.planId) {
      return NextResponse.json({ success: false, error: 'sellerId and planId are required' }, { status: 400 });
    }

    const saved = await saveSubscription(body);
    return NextResponse.json({ success: true, subscription: saved }, { status: 201 });
  } catch (error) {
    console.error('API Subscriptions POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update subscription' }, { status: 500 });
  }
}
