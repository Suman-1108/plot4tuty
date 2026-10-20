import { NextResponse } from 'next/server';
import { getSellers, saveSeller, updateSellerVerification } from '@/lib/storage';

export async function GET() {
  try {
    const sellers = await getSellers();
    return NextResponse.json({ success: true, count: sellers.length, sellers });
  } catch (error) {
    console.error('API Sellers GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch sellers' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: 'Seller name and phone are required' }, { status: 400 });
    }

    const seller = await saveSeller(body);
    return NextResponse.json({ success: true, seller }, { status: 201 });
  } catch (error) {
    console.error('API Sellers POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to register seller' }, { status: 500 });
  }
}

export async function PATCH(request: Request) {
  try {
    const body = await request.json();
    if (!body.id || body.isVerified === undefined) {
      return NextResponse.json({ success: false, error: 'Seller id and isVerified boolean are required' }, { status: 400 });
    }

    const updated = await updateSellerVerification(body.id, body.isVerified);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Seller not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, seller: updated });
  } catch (error) {
    console.error('API Sellers PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update seller' }, { status: 500 });
  }
}
