import { NextResponse } from 'next/server';
import { getEnquiries, saveEnquiry } from '@/lib/storage';

export async function GET() {
  try {
    const enquiries = await getEnquiries();
    return NextResponse.json({ success: true, count: enquiries.length, enquiries });
  } catch (error) {
    console.error('API Enquiries GET error:', error);
    return NextResponse.json({ success: false, error: 'Failed to fetch enquiries' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    if (!body.name || !body.phone) {
      return NextResponse.json({ success: false, error: 'Name and phone are required' }, { status: 400 });
    }

    const newEnquiry = await saveEnquiry({
      plotId: body.plotId || '',
      plotTitle: body.plotTitle || 'General Land Discovery Enquiry',
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email ? body.email.trim() : '',
      message: body.message ? body.message.trim() : 'I am interested in exploring available plots in Thoothukudi.',
      preferredLocation: body.preferredLocation || 'Thoothukudi',
      budget: body.budget || '',
      status: 'New'
    });

    return NextResponse.json({ success: true, enquiry: newEnquiry }, { status: 201 });
  } catch (error) {
    console.error('API Enquiries POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit enquiry' }, { status: 500 });
  }
}
