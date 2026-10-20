import fs from 'fs/promises';
import path from 'path';
import {
  Plot,
  Project,
  Enquiry,
  Seller,
  SubscriptionPlan,
  SellerSubscription,
  PaymentRecord,
  User,
} from './types';
import { INITIAL_PLOTS, INITIAL_PROJECTS, INITIAL_ENQUIRIES } from './data-defaults';

const DATA_DIR = path.join(process.cwd(), 'data');
const PLOTS_FILE = path.join(DATA_DIR, 'plots.json');
const PROJECTS_FILE = path.join(DATA_DIR, 'projects.json');
const ENQUIRIES_FILE = path.join(DATA_DIR, 'enquiries.json');
const SELLERS_FILE = path.join(DATA_DIR, 'sellers.json');
const SUBSCRIPTIONS_FILE = path.join(DATA_DIR, 'subscriptions.json');
const PAYMENTS_FILE = path.join(DATA_DIR, 'payments.json');
const USERS_FILE = path.join(DATA_DIR, 'users.json');

export { SUBSCRIPTION_PLANS } from './subscription-plans';
import { SUBSCRIPTION_PLANS } from './subscription-plans';

export const INITIAL_SELLERS: Seller[] = [
  {
    id: 'sel-1',
    name: 'S. Muthuraman',
    companyName: 'Muthu Promoters & Land Developers',
    email: 'muthu@plot4tuty.com',
    phone: '+91 98421 55678',
    whatsapp: '+919842155678',
    locality: 'Palayamkottai Road, Thoothukudi',
    isVerified: true,
    rating: 4.9,
    subscriptionPlanId: 'developer-pro',
    activeListingsCount: 3,
    createdAt: '2026-01-10'
  },
  {
    id: 'sel-2',
    name: 'K. Senthil Nathan',
    companyName: 'Pearl City Land Holdings',
    email: 'senthil@pearlcityplots.com',
    phone: '+91 94431 82910',
    whatsapp: '+919443182910',
    locality: 'Millerpuram, Thoothukudi',
    isVerified: true,
    rating: 4.8,
    subscriptionPlanId: 'growth',
    activeListingsCount: 2,
    createdAt: '2026-02-05'
  },
  {
    id: 'sel-3',
    name: 'T. Alagarsamy',
    companyName: 'Alagarsamy Lands (Individual Owner)',
    email: 'alagarsamy.t@gmail.com',
    phone: '+91 97890 44521',
    whatsapp: '+919789044521',
    locality: 'Tharuvaikulam, Thoothukudi',
    isVerified: true,
    rating: 4.7,
    subscriptionPlanId: 'starter',
    activeListingsCount: 1,
    createdAt: '2026-02-18'
  }
];

export const INITIAL_SUBSCRIPTIONS: SellerSubscription[] = [
  {
    id: 'sub-1',
    sellerId: 'sel-1',
    planId: 'developer-pro',
    planName: 'Developer Pro (Layout Promoters)',
    status: 'active',
    startDate: '2026-03-01',
    endDate: '2026-04-01',
    listingsUsed: 3,
    listingLimit: 50,
    amountPaid: 8258.82,
    invoiceNumber: 'INV-2026-001'
  },
  {
    id: 'sub-2',
    sellerId: 'sel-2',
    planId: 'growth',
    planName: 'Growth (Agent / Broker)',
    status: 'active',
    startDate: '2026-03-10',
    endDate: '2026-04-10',
    listingsUsed: 2,
    listingLimit: 10,
    amountPaid: 2948.82,
    invoiceNumber: 'INV-2026-002'
  },
  {
    id: 'sub-3',
    sellerId: 'sel-3',
    planId: 'starter',
    planName: 'Starter (Land Owner)',
    status: 'active',
    startDate: '2026-03-15',
    endDate: '2026-04-15',
    listingsUsed: 1,
    listingLimit: 2,
    amountPaid: 1178.82,
    invoiceNumber: 'INV-2026-003'
  }
];

export const INITIAL_PAYMENTS: PaymentRecord[] = [
  {
    id: 'pay-101',
    invoiceNumber: 'INV-2026-001',
    sellerId: 'sel-1',
    sellerName: 'Muthu Promoters & Land Developers',
    planId: 'developer-pro',
    amount: 6999,
    gstAmount: 1259.82,
    totalAmount: 8258.82,
    paymentGateway: 'Razorpay',
    transactionId: 'pay_rzp_live_839103982',
    status: 'Completed',
    createdAt: '2026-03-01T10:00:00.000Z'
  },
  {
    id: 'pay-102',
    invoiceNumber: 'INV-2026-002',
    sellerId: 'sel-2',
    sellerName: 'Pearl City Land Holdings',
    planId: 'growth',
    amount: 2499,
    gstAmount: 449.82,
    totalAmount: 2948.82,
    paymentGateway: 'Razorpay',
    transactionId: 'pay_rzp_live_728192837',
    status: 'Completed',
    createdAt: '2026-03-10T14:30:00.000Z'
  },
  {
    id: 'pay-103',
    invoiceNumber: 'INV-2026-003',
    sellerId: 'sel-3',
    sellerName: 'Alagarsamy Lands (Individual Owner)',
    planId: 'starter',
    amount: 999,
    gstAmount: 179.82,
    totalAmount: 1178.82,
    paymentGateway: 'Test Mode',
    transactionId: 'pay_test_99210192',
    status: 'Completed',
    createdAt: '2026-03-15T09:15:00.000Z'
  }
];

export const INITIAL_USERS: User[] = [
  {
    id: 'usr-customer-1',
    name: 'K. Arumugam',
    email: 'buyer@thoothukudi.com',
    phone: '+91 98421 98765',
    role: 'customer',
    savedPlotIds: ['plot-ap-30', 'plot-tkd-04'],
    createdAt: '2026-03-05'
  },
  {
    id: 'usr-seller-1',
    name: 'S. Muthuraman',
    email: 'muthu@plot4tuty.com',
    phone: '+91 98421 55678',
    role: 'seller',
    savedPlotIds: [],
    createdAt: '2026-01-10'
  },
  {
    id: 'usr-admin-1',
    name: 'Platform Administrator',
    email: 'admin@plot4tuty.com',
    phone: '+91 98421 55678',
    role: 'admin',
    savedPlotIds: [],
    createdAt: '2026-01-01'
  }
];

async function ensureDataFiles() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });

    try {
      await fs.access(PLOTS_FILE);
    } catch {
      await fs.writeFile(PLOTS_FILE, JSON.stringify(INITIAL_PLOTS, null, 2), 'utf-8');
    }

    try {
      await fs.access(PROJECTS_FILE);
    } catch {
      await fs.writeFile(PROJECTS_FILE, JSON.stringify(INITIAL_PROJECTS, null, 2), 'utf-8');
    }

    try {
      await fs.access(ENQUIRIES_FILE);
    } catch {
      await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(INITIAL_ENQUIRIES, null, 2), 'utf-8');
    }

    try {
      await fs.access(SELLERS_FILE);
    } catch {
      await fs.writeFile(SELLERS_FILE, JSON.stringify(INITIAL_SELLERS, null, 2), 'utf-8');
    }

    try {
      await fs.access(SUBSCRIPTIONS_FILE);
    } catch {
      await fs.writeFile(SUBSCRIPTIONS_FILE, JSON.stringify(INITIAL_SUBSCRIPTIONS, null, 2), 'utf-8');
    }

    try {
      await fs.access(PAYMENTS_FILE);
    } catch {
      await fs.writeFile(PAYMENTS_FILE, JSON.stringify(INITIAL_PAYMENTS, null, 2), 'utf-8');
    }

    try {
      await fs.access(USERS_FILE);
    } catch {
      await fs.writeFile(USERS_FILE, JSON.stringify(INITIAL_USERS, null, 2), 'utf-8');
    }
  } catch (error) {
    console.error('Error ensuring data files:', error);
  }
}

// ----------------- PLOTS CRUD -----------------
export async function getPlots(): Promise<Plot[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(PLOTS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading plots:', error);
    return INITIAL_PLOTS;
  }
}

export async function getPlotBySlug(slug: string): Promise<Plot | null> {
  const plots = await getPlots();
  return plots.find((p) => p.slug === slug || p.id === slug) || null;
}

export async function savePlot(plotData: Partial<Plot>): Promise<Plot> {
  const plots = await getPlots();
  const now = new Date().toISOString().split('T')[0];

  if (plotData.id) {
    // Update existing
    const index = plots.findIndex((p) => p.id === plotData.id);
    if (index !== -1) {
      const updated: Plot = {
        ...plots[index],
        ...plotData,
      } as Plot;
      plots[index] = updated;
      await fs.writeFile(PLOTS_FILE, JSON.stringify(plots, null, 2), 'utf-8');
      return updated;
    }
  }

  // Create new
  const id = `plot-tkd-${Date.now().toString().slice(-6)}`;
  const slug = (plotData.title || `plot-${Date.now()}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const price = Number(plotData.price) || 800000;
  const areaSqFt = Number(plotData.areaSqFt) || 1200;
  const areaCents = Number(plotData.areaCents) || +(areaSqFt / 435.6).toFixed(2);
  const pricePerSqFt = Number(plotData.pricePerSqFt) || Math.round(price / (areaSqFt || 1));
  const pricePerCent = Number(plotData.pricePerCent) || Math.round(price / (areaCents || 1));

  const newPlot: Plot = {
    id,
    uniquePropertyId: plotData.uniquePropertyId || `TKD-PLT-${Math.floor(1000 + Math.random() * 9000)}`,
    slug,
    title: plotData.title || 'Prime Residential Plot in Thoothukudi',
    project: plotData.project || 'Independent Layout',
    location: plotData.location || 'Korampallam, Thoothukudi',
    locality: plotData.locality || 'Korampallam',
    district: 'Thoothukudi',
    state: 'Tamil Nadu',
    address: plotData.address || 'Thoothukudi, Tamil Nadu 628101',
    price,
    priceDisplay: plotData.priceDisplay || `₹${(price / 100000).toFixed(2)} Lakhs`,
    pricePerSqFt,
    pricePerCent,
    areaSqFt,
    areaCents,
    dimensions: plotData.dimensions || '30 ft x 40 ft',
    lengthFt: plotData.lengthFt || 40,
    widthFt: plotData.widthFt || 30,
    frontageFt: plotData.frontageFt || 30,
    facing: plotData.facing || 'East',
    orientation: plotData.orientation || plotData.facing || 'East',
    shape: plotData.shape || 'Regular Rectangular',
    isCornerPlot: !!plotData.isCornerPlot,
    roadWidth: plotData.roadWidth || '30 ft Blacktop Tar Road',
    roadWidthFt: plotData.roadWidthFt || 30,
    accessType: plotData.accessType || 'Direct Tar Road Frontage',
    electricityStatus: plotData.electricityStatus || 'TNEB Transformer Ready',
    waterAvailability: plotData.waterAvailability || 'Sweet Groundwater at 25-30 ft',
    drainageStatus: plotData.drainageStatus || 'Layout Storm Drainage Ready',
    streetlights: plotData.streetlights !== undefined ? plotData.streetlights : true,
    approval: plotData.approval || 'DTCP Approved',
    approvalNumber: plotData.approvalNumber || 'DTCP Verified Order',
    pattaStatus: plotData.pattaStatus || 'Clear Legal Patta & 30-Year EC',
    encumbranceCertificate: plotData.encumbranceCertificate || 'Nil Encumbrance (EC) Verified',
    surveyNumber: plotData.surveyNumber || 'Survey No. Verified',
    zoning: plotData.zoning || 'Residential Layout Zone',
    constructionRestrictions: plotData.constructionRestrictions || 'G+2 Floors Permissible',
    possessionStatus: plotData.possessionStatus || 'Immediate Registration & Possession',
    status: plotData.status || 'Available',
    isFeatured: !!plotData.isFeatured,
    description:
      plotData.description ||
      'Authentic residential plot with clear title, sweet water, and direct tar road in Thoothukudi.',
    amenities:
      plotData.amenities && plotData.amenities.length > 0
        ? plotData.amenities
        : [
            '30 ft Blacktop Tar Road',
            'Overhead TNEB Electricity Lines',
            'Sweet Drinking Groundwater',
            'Individual Concrete Boundary Stones',
            'Solar LED Street Lighting',
            'Up to 90% Bank Loan Approved'
          ],
    landmarks:
      plotData.landmarks && plotData.landmarks.length > 0
        ? plotData.landmarks
        : [
            { name: 'District Collectorate Office', distance: '8 mins' },
            { name: 'Tuticorin Bus Stand', distance: '12 mins' },
            { name: 'Tuticorin Airport', distance: '18 mins' }
          ],
    images:
      plotData.images && plotData.images.length > 0
        ? plotData.images
        : [
            '/images/plots/demarcated-plot.jpg',
            '/images/plots/dtcp-masterplan-blueprint.jpg',
            '/images/plots/corner-plot-avenue.jpg'
          ],
    layoutDrawingUrl: plotData.layoutDrawingUrl || '/images/plots/dtcp-masterplan-blueprint.jpg',
    surveyDocumentUrl: plotData.surveyDocumentUrl || '/images/plots/dtcp-masterplan-blueprint.jpg',
    layoutPlotNumber: plotData.layoutPlotNumber || 'Plot #01',
    phase: plotData.phase || 'Phase 1',
    houseConstructionAvailable: !!plotData.houseConstructionAvailable,
    coordinates: plotData.coordinates || { lat: 8.8042, lng: 78.1287 },
    additionalCharges: plotData.additionalCharges || {
      stampDutyEstimated: Math.round(price * 0.07),
      registrationEstimated: Math.round(price * 0.04),
      legalDocumentation: 15000
    },
    sellerId: plotData.sellerId || 'sel-1',
    sellerName: plotData.sellerName || 'Muthu Promoters & Developers',
    sellerPhone: plotData.sellerPhone || '+91 98421 55678',
    sellerVerified: plotData.sellerVerified !== undefined ? plotData.sellerVerified : true,
    verificationStatus: plotData.verificationStatus || 'Verified',
    createdAt: now,
  };

  plots.unshift(newPlot);
  await fs.writeFile(PLOTS_FILE, JSON.stringify(plots, null, 2), 'utf-8');
  return newPlot;
}

export async function deletePlot(id: string): Promise<boolean> {
  const plots = await getPlots();
  const filtered = plots.filter((p) => p.id !== id);
  if (filtered.length !== plots.length) {
    await fs.writeFile(PLOTS_FILE, JSON.stringify(filtered, null, 2), 'utf-8');
    return true;
  }
  return false;
}

export async function updatePlotStatus(id: string, status: Plot['status']): Promise<Plot | null> {
  const plots = await getPlots();
  const index = plots.findIndex((p) => p.id === id);
  if (index !== -1) {
    plots[index].status = status;
    await fs.writeFile(PLOTS_FILE, JSON.stringify(plots, null, 2), 'utf-8');
    return plots[index];
  }
  return null;
}

// ----------------- PROJECTS -----------------
export async function getProjects(): Promise<Project[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(PROJECTS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading projects:', error);
    return INITIAL_PROJECTS;
  }
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const projects = await getProjects();
  return projects.find((p) => p.slug === slug || p.id === slug) || null;
}

export async function saveProject(projectData: Partial<Project>): Promise<Project> {
  const projects = await getProjects();
  if (projectData.id) {
    const idx = projects.findIndex((p) => p.id === projectData.id);
    if (idx !== -1) {
      projects[idx] = { ...projects[idx], ...projectData } as Project;
      await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2), 'utf-8');
      return projects[idx];
    }
  }

  const id = `proj-${Date.now().toString().slice(-6)}`;
  const slug = (projectData.name || `project-${Date.now()}`)
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');

  const newProject: Project = {
    id,
    slug,
    name: projectData.name || 'New Layout Project',
    tagline: projectData.tagline || 'Residential Layout in Thoothukudi',
    location: projectData.location || 'Thoothukudi',
    address: projectData.address || 'Thoothukudi, Tamil Nadu',
    totalPlots: projectData.totalPlots || 20,
    availablePlots: projectData.availablePlots || 15,
    soldPlots: projectData.soldPlots || 5,
    priceRange: projectData.priceRange || '₹10L - ₹25L',
    plotSizes: projectData.plotSizes || '1200 - 2400 sq.ft',
    approval: projectData.approval || 'DTCP Approved',
    approvalNumber: projectData.approvalNumber || 'DTCP Verified Order',
    description: projectData.description || 'Verified DTCP approved layout with modern amenities.',
    image: projectData.image || '/images/plots/dtcp-masterplan-blueprint.jpg',
    gallery: projectData.gallery || ['/images/plots/dtcp-masterplan-blueprint.jpg'],
    amenities: projectData.amenities || ['Tar Roads', 'Street Lights', 'Sweet Water'],
    landmarks: projectData.landmarks || [],
    layoutPlots: projectData.layoutPlots || [],
  };

  projects.unshift(newProject);
  await fs.writeFile(PROJECTS_FILE, JSON.stringify(projects, null, 2), 'utf-8');
  return newProject;
}

// ----------------- ENQUIRIES -----------------
export async function getEnquiries(): Promise<Enquiry[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(ENQUIRIES_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Error reading enquiries:', error);
    return INITIAL_ENQUIRIES;
  }
}

export async function saveEnquiry(
  enquiryData: Omit<Enquiry, 'id' | 'createdAt' | 'status'> & { status?: Enquiry['status'] }
): Promise<Enquiry> {
  const enquiries = await getEnquiries();
  const newEnquiry: Enquiry = {
    id: `enq-${Date.now().toString().slice(-6)}`,
    plotId: enquiryData.plotId,
    plotTitle: enquiryData.plotTitle,
    plotNumber: enquiryData.plotNumber,
    name: enquiryData.name,
    phone: enquiryData.phone,
    email: enquiryData.email,
    message: enquiryData.message,
    preferredLocation: enquiryData.preferredLocation,
    budget: enquiryData.budget,
    enquiryType: enquiryData.enquiryType || 'General',
    preferredDate: enquiryData.preferredDate,
    preferredTime: enquiryData.preferredTime,
    needLoanAssistance: enquiryData.needLoanAssistance,
    interestedInHouse: enquiryData.interestedInHouse,
    status: enquiryData.status || 'New',
    sellerNotes: enquiryData.sellerNotes || '',
    createdAt: new Date().toISOString(),
  };

  enquiries.unshift(newEnquiry);
  await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
  return newEnquiry;
}

export async function updateEnquiryStatus(
  id: string,
  status: Enquiry['status'],
  sellerNotes?: string
): Promise<Enquiry | null> {
  const enquiries = await getEnquiries();
  const index = enquiries.findIndex((e) => e.id === id);
  if (index !== -1) {
    enquiries[index].status = status;
    if (sellerNotes !== undefined) {
      enquiries[index].sellerNotes = sellerNotes;
    }
    await fs.writeFile(ENQUIRIES_FILE, JSON.stringify(enquiries, null, 2), 'utf-8');
    return enquiries[index];
  }
  return null;
}

// ----------------- SELLERS -----------------
export async function getSellers(): Promise<Seller[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(SELLERS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return INITIAL_SELLERS;
  }
}

export async function getSellerById(id: string): Promise<Seller | null> {
  const sellers = await getSellers();
  return sellers.find((s) => s.id === id) || null;
}

export async function saveSeller(sellerData: Partial<Seller>): Promise<Seller> {
  const sellers = await getSellers();
  if (sellerData.id) {
    const idx = sellers.findIndex((s) => s.id === sellerData.id);
    if (idx !== -1) {
      sellers[idx] = { ...sellers[idx], ...sellerData } as Seller;
      await fs.writeFile(SELLERS_FILE, JSON.stringify(sellers, null, 2), 'utf-8');
      return sellers[idx];
    }
  }

  const newSeller: Seller = {
    id: `sel-${Date.now().toString().slice(-5)}`,
    name: sellerData.name || 'New Seller',
    companyName: sellerData.companyName || 'Land Owner / Promoter',
    email: sellerData.email || '',
    phone: sellerData.phone || '',
    whatsapp: sellerData.whatsapp || sellerData.phone || '',
    locality: sellerData.locality || 'Thoothukudi',
    isVerified: !!sellerData.isVerified,
    rating: 5.0,
    subscriptionPlanId: sellerData.subscriptionPlanId || 'starter',
    activeListingsCount: 0,
    createdAt: new Date().toISOString().split('T')[0],
  };

  sellers.push(newSeller);
  await fs.writeFile(SELLERS_FILE, JSON.stringify(sellers, null, 2), 'utf-8');
  return newSeller;
}

export async function updateSellerVerification(id: string, isVerified: boolean): Promise<Seller | null> {
  const sellers = await getSellers();
  const idx = sellers.findIndex((s) => s.id === id);
  if (idx !== -1) {
    sellers[idx].isVerified = isVerified;
    await fs.writeFile(SELLERS_FILE, JSON.stringify(sellers, null, 2), 'utf-8');
    return sellers[idx];
  }
  return null;
}

// ----------------- SUBSCRIPTIONS & PLANS -----------------
export function getSubscriptionPlans(): SubscriptionPlan[] {
  return SUBSCRIPTION_PLANS;
}

export async function getSubscriptions(): Promise<SellerSubscription[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(SUBSCRIPTIONS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return INITIAL_SUBSCRIPTIONS;
  }
}

export async function getSellerSubscription(sellerId: string): Promise<SellerSubscription | null> {
  const subs = await getSubscriptions();
  return subs.find((s) => s.sellerId === sellerId && s.status === 'active') || null;
}

export async function saveSubscription(subData: Partial<SellerSubscription>): Promise<SellerSubscription> {
  const subs = await getSubscriptions();
  const now = new Date();
  const endDate = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0];

  const plan = SUBSCRIPTION_PLANS.find((p) => p.id === subData.planId) || SUBSCRIPTION_PLANS[0];

  const newSub: SellerSubscription = {
    id: subData.id || `sub-${Date.now().toString().slice(-6)}`,
    sellerId: subData.sellerId || 'sel-1',
    planId: plan.id,
    planName: plan.name,
    status: 'active',
    startDate: now.toISOString().split('T')[0],
    endDate: subData.endDate || endDate,
    listingsUsed: subData.listingsUsed || 0,
    listingLimit: plan.listingLimit,
    amountPaid: subData.amountPaid || Math.round(plan.price * 1.18 * 100) / 100,
    invoiceNumber: subData.invoiceNumber || `INV-${new Date().getFullYear()}-${Math.floor(100 + Math.random() * 900)}`,
  };

  const existingIdx = subs.findIndex((s) => s.sellerId === newSub.sellerId);
  if (existingIdx !== -1) {
    subs[existingIdx] = newSub;
  } else {
    subs.unshift(newSub);
  }

  await fs.writeFile(SUBSCRIPTIONS_FILE, JSON.stringify(subs, null, 2), 'utf-8');
  return newSub;
}

// ----------------- PAYMENTS -----------------
export async function getPayments(): Promise<PaymentRecord[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(PAYMENTS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return INITIAL_PAYMENTS;
  }
}

export async function recordPayment(payment: Omit<PaymentRecord, 'id' | 'createdAt'>): Promise<PaymentRecord> {
  const payments = await getPayments();
  const newPayment: PaymentRecord = {
    id: `pay-${Date.now().toString().slice(-6)}`,
    ...payment,
    createdAt: new Date().toISOString(),
  };

  payments.unshift(newPayment);
  await fs.writeFile(PAYMENTS_FILE, JSON.stringify(payments, null, 2), 'utf-8');
  return newPayment;
}

// ----------------- USERS -----------------
export async function getUsers(): Promise<User[]> {
  await ensureDataFiles();
  try {
    const raw = await fs.readFile(USERS_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return INITIAL_USERS;
  }
}

export async function getUserById(id: string): Promise<User | null> {
  const users = await getUsers();
  return users.find((u) => u.id === id) || null;
}

export async function toggleSavedPlot(userId: string, plotId: string): Promise<string[]> {
  const users = await getUsers();
  const user = users.find((u) => u.id === userId);
  if (!user) return [];

  const exists = user.savedPlotIds.includes(plotId);
  if (exists) {
    user.savedPlotIds = user.savedPlotIds.filter((p) => p !== plotId);
  } else {
    user.savedPlotIds.push(plotId);
  }

  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  return user.savedPlotIds;
}

export async function saveUser(userData: Partial<User>): Promise<User> {
  const users = await getUsers();
  if (userData.id) {
    const idx = users.findIndex((u) => u.id === userData.id);
    if (idx !== -1) {
      users[idx] = { ...users[idx], ...userData } as User;
      await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
      return users[idx];
    }
  }

  const id = `usr-${userData.role || 'customer'}-${Date.now().toString().slice(-5)}`;
  const newUser: User = {
    id,
    name: userData.name || 'New User',
    email: userData.email || '',
    phone: userData.phone || '',
    role: userData.role || 'customer',
    savedPlotIds: userData.savedPlotIds || [],
    createdAt: new Date().toISOString().split('T')[0],
  };

  users.push(newUser);
  await fs.writeFile(USERS_FILE, JSON.stringify(users, null, 2), 'utf-8');
  return newUser;
}

// ----------------- ADMIN DASHBOARD STATS -----------------
export async function getAdminStats() {
  const plots = await getPlots();
  const enquiries = await getEnquiries();
  const sellers = await getSellers();
  const subscriptions = await getSubscriptions();
  const payments = await getPayments();

  const totalRevenue = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + p.totalAmount, 0);

  const availablePlots = plots.filter((p) => p.status === 'Available').length;
  const soldPlots = plots.filter((p) => p.status === 'Sold').length;
  const siteVisits = enquiries.filter((e) => e.status === 'Site Visit').length;

  return {
    totalPlots: plots.length,
    availablePlots,
    soldPlots,
    totalEnquiries: enquiries.length,
    siteVisitsScheduled: siteVisits,
    totalSellers: sellers.length,
    verifiedSellers: sellers.filter((s) => s.isVerified).length,
    activeSubscriptions: subscriptions.filter((s) => s.status === 'active').length,
    totalRevenue: Math.round(totalRevenue),
    currency: 'INR'
  };
}
