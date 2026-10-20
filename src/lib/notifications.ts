import { Enquiry, PaymentRecord, SellerSubscription } from './types';

export interface NotificationLog {
  id: string;
  type: 'email' | 'whatsapp';
  channel: string;
  recipient: string;
  subject?: string;
  message: string;
  status: 'sent' | 'pending' | 'failed';
  timestamp: string;
}

// In-memory / file simulated notification store
const notificationLogs: NotificationLog[] = [];

export function generateWhatsAppLink(phone: string, text: string): string {
  const cleanPhone = phone.replace(/[^0-9]/g, '');
  const encodedText = encodeURIComponent(text);
  return `https://wa.me/${cleanPhone.startsWith('91') ? cleanPhone : '91' + cleanPhone}?text=${encodedText}`;
}

export async function sendEnquiryNotification(enquiry: Enquiry): Promise<{ emailSent: boolean; whatsappUrl: string }> {
  const buyerMessage = `Hello ${enquiry.name}, thank you for your interest in ${enquiry.plotTitle || 'Residential Plot in Thoothukudi'} through PLOT FOR THOOTHUKUDI. Our verified property consultant will contact you shortly.`;
  
  const sellerMessage = `*New Lead on PLOT FOR THOOTHUKUDI!*
Property: ${enquiry.plotTitle || 'Residential Plot'}
Customer: ${enquiry.name}
Phone: ${enquiry.phone}
Email: ${enquiry.email || 'N/A'}
Type: ${enquiry.enquiryType || 'General'}
Message: ${enquiry.message}
Date: ${new Date().toLocaleDateString('en-IN')}`;

  notificationLogs.push({
    id: `notif-${Date.now()}-1`,
    type: 'email',
    channel: 'transactional-email',
    recipient: enquiry.email,
    subject: `Enquiry Acknowledgement: ${enquiry.plotTitle || 'Thoothukudi Plot'}`,
    message: buyerMessage,
    status: 'sent',
    timestamp: new Date().toISOString()
  });

  const whatsappUrl = generateWhatsAppLink('919842155678', sellerMessage);

  return { emailSent: true, whatsappUrl };
}

export async function sendSubscriptionActivationNotification(
  subscription: SellerSubscription,
  payment: PaymentRecord,
  sellerEmail: string
): Promise<boolean> {
  const message = `Dear Partner, your subscription for ${subscription.planName} has been activated successfully! Invoice #${payment.invoiceNumber}. Your listing quota is ${subscription.listingLimit} plots.`;

  notificationLogs.push({
    id: `notif-${Date.now()}-sub`,
    type: 'email',
    channel: 'subscription-billing',
    recipient: sellerEmail,
    subject: `PLOT FOR THOOTHUKUDI – Subscription Activated [Invoice #${payment.invoiceNumber}]`,
    message,
    status: 'sent',
    timestamp: new Date().toISOString()
  });

  return true;
}

export function getRecentNotifications(): NotificationLog[] {
  return [...notificationLogs].reverse().slice(0, 20);
}
