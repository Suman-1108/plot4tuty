import { NextResponse } from 'next/server';
import { updateEnquiryStatus, getEnquiries } from '@/lib/storage';
import fs from 'fs/promises';
import path from 'path';

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

    const updated = await updateEnquiryStatus(id, body.status, body.sellerNotes);
    if (!updated) {
      return NextResponse.json({ success: false, error: 'Enquiry not found' }, { status: 404 });
    }

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error) {
    console.error('API Enquiry PATCH error:', error);
    return NextResponse.json({ success: false, error: 'Failed to update enquiry' }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await context.params;
    const DATA_DIR = path.join(process.cwd(), 'data');
    const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');
    const enquiries = await getEnquiries();
    const filtered = enquiries.filter((e) => e.id !== id);

    if (filtered.length === enquiries.length) {
      return NextResponse.json({ success: false, error: 'Enquiry not found' }, { status: 404 });
    }

    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
    return NextResponse.json({ success: true, message: 'Enquiry removed' });
  } catch (error) {
    console.error('API Enquiry DELETE error:', error);
    return NextResponse.json({ success: false, error: 'Failed to delete enquiry' }, { status: 500 });
  }
}
