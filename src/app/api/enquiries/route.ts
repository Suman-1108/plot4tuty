import { NextResponse } from 'next/server';
import { getEnquiries, saveEnquiry } from '@/lib/storage';
import { sendEnquiryNotification } from '@/lib/notifications';

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const plotId = searchParams.get('plotId');
    const status = searchParams.get('status');

    let enquiries = await getEnquiries();

    if (plotId) {
      enquiries = enquiries.filter((e) => e.plotId === plotId);
    }
    if (status) {
      enquiries = enquiries.filter((e) => e.status.toLowerCase() === status.toLowerCase());
    }

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
      plotTitle: body.plotTitle || 'Residential Plot in Thoothukudi',
      plotNumber: body.plotNumber || '',
      name: body.name.trim(),
      phone: body.phone.trim(),
      email: body.email ? body.email.trim() : '',
      message: body.message ? body.message.trim() : 'I am interested in exploring available plots in Thoothukudi.',
      preferredLocation: body.preferredLocation || 'Thoothukudi',
      budget: body.budget || '',
      enquiryType: body.enquiryType || 'General',
      preferredDate: body.preferredDate,
      preferredTime: body.preferredTime,
      needLoanAssistance: !!body.needLoanAssistance,
      interestedInHouse: !!body.interestedInHouse,
      status: body.preferredDate ? 'Site Visit' : 'New',
    });

    // Trigger transactional notification & generate direct WhatsApp URL
    const notifResult = await sendEnquiryNotification(newEnquiry);

    return NextResponse.json(
      {
        success: true,
        enquiry: newEnquiry,
        whatsappUrl: notifResult.whatsappUrl
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('API Enquiries POST error:', error);
    return NextResponse.json({ success: false, error: 'Failed to submit enquiry' }, { status: 500 });
  }
}
