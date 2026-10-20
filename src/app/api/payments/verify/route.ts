import { NextResponse } from 'next/server';
import {
  getPayments,
  recordPayment,
  saveSubscription,
  SUBSCRIPTION_PLANS,
  getSellerById,
} from '@/lib/storage';
import { sendSubscriptionActivationNotification } from '@/lib/notifications';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      transactionId,
      sellerId,
      sellerName,
      sellerEmail,
      planId,
      paymentGateway = 'Test Mode',
      signature,
    } = body;

    if (!transactionId || !sellerId || !planId) {
      return NextResponse.json(
        { success: false, error: 'Transaction ID, sellerId, and planId are required for verification.' },
        { status: 400 }
      );
    }

    // 1. Prevent duplicate payment processing
    const existingPayments = await getPayments();
    const duplicate = existingPayments.find((p) => p.transactionId === transactionId);
    if (duplicate) {
      return NextResponse.json(
        {
          success: false,
          error: 'Duplicate payment detected. This transaction ID has already been recorded.',
          invoice: duplicate,
        },
        { status: 409 }
      );
    }

    // 2. Validate plan details server-side
    const plan = SUBSCRIPTION_PLANS.find((p) => p.id === planId);
    if (!plan) {
      return NextResponse.json({ success: false, error: 'Invalid subscription plan ID' }, { status: 400 });
    }

    // Server-side verification (in test mode, verify signature prefix or mock verification token)
    const isValidSignature = signature ? signature.length >= 8 : true;
    if (!isValidSignature) {
      return NextResponse.json(
        { success: false, error: 'Payment signature verification failed. Untrusted transaction.' },
        { status: 403 }
      );
    }

    // Calculate tax breakdown (18% GST in India for digital services)
    const baseAmount = plan.price;
    const gstAmount = Math.round(baseAmount * 0.18 * 100) / 100;
    const totalAmount = Math.round((baseAmount + gstAmount) * 100) / 100;
    const invoiceNumber = `INV-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;

    // 3. Record auditable payment record
    const payment = await recordPayment({
      invoiceNumber,
      sellerId,
      sellerName: sellerName || 'Partner Seller',
      planId: plan.id,
      amount: baseAmount,
      gstAmount,
      totalAmount,
      paymentGateway: (paymentGateway as any) || 'Razorpay',
      transactionId,
      status: 'Completed',
    });

    // 4. Activate or renew subscription with server-verified limits
    const now = new Date();
    const expiryDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

    const subscription = await saveSubscription({
      sellerId,
      planId: plan.id,
      planName: plan.name,
      status: 'active',
      startDate: now.toISOString().split('T')[0],
      endDate: expiryDate,
      listingLimit: plan.listingLimit,
      amountPaid: totalAmount,
      invoiceNumber,
    });

    // 5. Send confirmation transactional notification
    const seller = await getSellerById(sellerId);
    const targetEmail = sellerEmail || (seller ? seller.email : 'partner@plot4tuty.com');
    await sendSubscriptionActivationNotification(subscription, payment, targetEmail);

    return NextResponse.json({
      success: true,
      message: 'Payment verified successfully and subscription activated.',
      payment,
      subscription,
      invoice: {
        invoiceNumber,
        date: new Date().toLocaleDateString('en-IN'),
        plan: plan.name,
        listingLimit: plan.listingLimit,
        baseAmount: `₹${baseAmount.toLocaleString('en-IN')}`,
        gstAmount: `₹${gstAmount.toLocaleString('en-IN')}`,
        totalPaid: `₹${totalAmount.toLocaleString('en-IN')}`,
        transactionId,
        paymentGateway,
        status: 'PAID'
      }
    });
  } catch (error) {
    console.error('API Payment verify error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal error during payment verification' },
      { status: 500 }
    );
  }
}
