export type PlotStatus = 'Available' | 'Fast Selling' | 'Reserved' | 'Sold';

export type ApprovalType =
  | 'DTCP Approved'
  | 'RERA Registered'
  | 'DTCP & RERA Approved'
  | 'Panchayat Approved'
  | 'Pending Verification'
  | string;

export interface Landmark {
  name: string;
  distance: string;
  category?: 'transport' | 'education' | 'healthcare' | 'governance' | 'landmark' | string;
}

export interface PlotAdditionalCharges {
  stampDutyEstimated: number;
  registrationEstimated: number;
  legalDocumentation: number;
}

export interface Plot {
  id: string;
  uniquePropertyId?: string;
  slug: string;
  title: string;
  project: string;
  location: string;
  locality?: string;
  district?: string;
  state?: string;
  address: string;
  price: number;
  priceDisplay: string;
  pricePerSqFt: number;
  pricePerCent: number;
  areaSqFt: number;
  areaCents: number;
  dimensions: string;
  lengthFt?: number;
  widthFt?: number;
  frontageFt?: number;
  facing: string;
  orientation?: string;
  shape?: string;
  isCornerPlot?: boolean;
  roadWidth: string;
  roadWidthFt?: number;
  accessType?: string;
  electricityStatus?: string;
  waterAvailability?: string;
  drainageStatus?: string;
  streetlights?: boolean;
  approval: ApprovalType;
  approvalNumber: string;
  pattaStatus: string;
  encumbranceCertificate?: string;
  surveyNumber?: string;
  zoning?: string;
  constructionRestrictions?: string;
  possessionStatus?: string;
  status: PlotStatus;
  isFeatured: boolean;
  description: string;
  amenities: string[];
  landmarks: Landmark[];
  images: string[];
  layoutDrawingUrl?: string;
  surveyDocumentUrl?: string;
  layoutPlotNumber: string;
  phase?: string;
  houseConstructionAvailable?: boolean;
  coordinates?: {
    lat: number;
    lng: number;
  };
  additionalCharges?: PlotAdditionalCharges;
  sellerId?: string;
  sellerName?: string;
  sellerPhone?: string;
  sellerVerified?: boolean;
  verificationStatus?: 'Verified' | 'Pending Verification';
  createdAt: string;
  [key: string]: any;
}

export interface ProjectLayoutPlot {
  number: number;
  size: string;
  sqft?: number;
  cents: number;
  facing: string;
  status: 'Available' | 'Reserved' | 'Sold';
  price: string;
  dimensions?: string;
  roadWidth?: string;
  [key: string]: any;
}

export interface Project {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  location: string;
  address: string;
  totalPlots: number;
  availablePlots: number;
  soldPlots: number;
  priceRange: string;
  plotSizes: string;
  approval: string;
  approvalNumber: string;
  description: string;
  image: string;
  gallery: string[];
  amenities: string[];
  landmarks: Landmark[];
  layoutPlots: ProjectLayoutPlot[];
  layoutBlueprintUrl?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
  [key: string]: any;
}

export interface Enquiry {
  id: string;
  plotId?: string;
  plotTitle?: string;
  plotNumber?: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  preferredLocation?: string;
  budget?: string;
  enquiryType?: 'General' | 'Price Quote' | 'Site Visit' | 'Layout Plan' | string;
  preferredDate?: string;
  preferredTime?: string;
  needLoanAssistance?: boolean;
  interestedInHouse?: boolean;
  status: 'New' | 'Contacted' | 'Site Visit' | 'Follow-up' | 'Closed' | string;
  sellerNotes?: string;
  createdAt: string;
  [key: string]: any;
}

export interface SearchFilterState {
  location: string;
  budgetRange: string;
  plotSize: string;
  facing: string;
  approval: string;
  status: string;
  searchQuery: string;
  verifiedOnly?: boolean;
}

export interface Seller {
  id: string;
  name: string;
  companyName?: string;
  agencyName?: string;
  email: string;
  phone: string;
  whatsapp?: string;
  locality?: string;
  isVerified?: boolean;
  rating?: number;
  subscriptionPlanId?: string;
  activeListingsCount?: number;
  createdAt?: string;
  [key: string]: any;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  tagline?: string;
  price: number;
  priceMonthly?: number;
  priceDisplay?: string;
  billingPeriod?: string;
  listingLimit: number;
  plotListingLimit?: number;
  features: string[];
  isPopular?: boolean;
  badge?: string;
  [key: string]: any;
}

export interface SellerSubscription {
  id: string;
  sellerId: string;
  planId: string;
  planName: string;
  status: 'active' | 'expired' | 'pending';
  startDate: string;
  endDate: string;
  listingsUsed: number;
  listingLimit: number;
  amountPaid: number;
  invoiceNumber: string;
  [key: string]: any;
}

export interface PaymentRecord {
  id: string;
  invoiceNumber: string;
  sellerId: string;
  sellerName: string;
  planId: string;
  amount: number;
  gstAmount: number;
  totalAmount: number;
  paymentGateway: 'Razorpay' | 'Test Mode' | 'Bank Transfer' | string;
  transactionId: string;
  status: 'Completed' | 'Pending' | 'Failed';
  createdAt: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  role: 'customer' | 'seller' | 'admin';
  savedPlotIds: string[];
  createdAt: string;
}

export interface HouseModel {
  id: string;
  title?: string;
  name?: string;
  type?: string;
  areaSqFt?: number;
  approxCost?: string;
  description?: string;
  [key: string]: any;
}
