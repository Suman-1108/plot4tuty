import { SubscriptionPlan } from './types';

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'starter',
    name: 'Starter (Land Owner)',
    tagline: 'Ideal for individual plot owners selling personal land parcels in Thoothukudi',
    price: 999,
    priceDisplay: '₹999 / month',
    billingPeriod: 'monthly',
    listingLimit: 2,
    features: [
      'Up to 2 Active Residential Plot Listings',
      'Direct WhatsApp & Phone Call Leads',
      'Standard Search & Locality Filtering',
      'Lead Enquiry Tracker in Seller Portal',
      'Free Document & Title Verification Review',
      'Standard Map Demarcation'
    ],
    isPopular: false,
    badge: 'Individual Owner'
  },
  {
    id: 'growth',
    name: 'Growth (Agent / Broker)',
    tagline: 'Best for real estate agents and consultants handling multiple verified plots',
    price: 2499,
    priceDisplay: '₹2,499 / month',
    billingPeriod: 'monthly',
    listingLimit: 10,
    features: [
      'Up to 10 Active Residential Plot Listings',
      'Featured Green Badge on Homepage',
      'Verified Patta & Legal Seal Highlight',
      'Instant WhatsApp Lead Alerts',
      'Visitor Views & Analytics Dashboard',
      'Priority Customer Site Visit Booking',
      'Social Media Broadcast Assistance'
    ],
    isPopular: true,
    badge: 'Most Popular'
  },
  {
    id: 'developer-pro',
    name: 'Developer Pro (Layout Promoters)',
    tagline: 'For colonizers, layout developers, and DTCP approved township promoters',
    price: 6999,
    priceDisplay: '₹6,999 / month',
    billingPeriod: 'monthly',
    listingLimit: 50,
    features: [
      'Up to 50 Plots & Plotted Layouts',
      'Interactive Masterplan Layout Blueprint',
      'Interactive Plot Availability Grid (Available/Reserved/Sold)',
      'Dedicated Project Showcase Page',
      'Top Ranking in Thoothukudi Corridors',
      'Complete CRM Lead Manager with CSV Export',
      'Dedicated Real Estate Account Manager',
      'TNRERA Compliance Verification Tag'
    ],
    isPopular: false,
    badge: 'Promoter Suite'
  }
];
