import { NextResponse } from 'next/server';
import { updateEnquiryStatus } from '@/lib/storage';

export async function PATCH(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const body = await request.json();

    if (!body.status) {
      return NextResponse.json({ success: false, error: 'Status is required' }, { status: 400 });
    }

    const updated = await updateEnquiryStatus(id, body.status);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Enquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error) {
    console.error('API Enquiry PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update enquiry' }, { status: 500 });
  }
}
