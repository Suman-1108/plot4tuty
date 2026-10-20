'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useSeller } from '@/seller/context/SellerContext';
import {
  PlusCircle,
  ArrowLeft,
  CheckCircle2,
  Building,
  MapPin,
  IndianRupee,
  FileCheck,
  ShieldCheck,
  Sparkles,
} from 'lucide-react';

export default function NewPropertyPage() {
  const router = useRouter();
  const { seller, subscription } = useSeller();

  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  // Form states
  const [title, setTitle] = useState('');
  const [project, setProject] = useState('Aura Layout Phase II');
  const [location, setLocation] = useState('Korampallam, Thoothukudi');
  const [locality, setLocality] = useState('Korampallam');
  const [price, setPrice] = useState('1450000');
  const [areaSqFt, setAreaSqFt] = useState('1200');
  const [dimensions, setDimensions] = useState('30 ft x 40 ft');
  const [facing, setFacing] = useState('East');
  const [roadWidth, setRoadWidth] = useState('30 ft Blacktop Tar Road');
  const [layoutPlotNumber, setLayoutPlotNumber] = useState('Plot #18');
  const [approval, setApproval] = useState('DTCP Approved');
  const [approvalNumber] = useState('DTCP/TN/TKD/2025/089');
  const [pattaStatus, setPattaStatus] = useState('Clear Legal Patta & 30-Year Nil EC');
  const [surveyNumber, setSurveyNumber] = useState('SF No. 342/2B');
  const [description, setDescription] = useState(
    'Prime corner residential plot with DTCP order, sweet groundwater at 25 feet, direct tar road frontage, and immediate registration.'
  );

  const calculateCents = (sqft: number) => +(sqft / 435.6).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setError('');

    const numericPrice = Number(price) || 1200000;
    const numericSqFt = Number(areaSqFt) || 1200;
    const cents = calculateCents(numericSqFt);

    const newPlotData = {
      title: title || `Prime ${cents} Cent Residential Plot in ${locality}`,
      project,
      location,
      locality,
      price: numericPrice,
      priceDisplay: `₹${(numericPrice / 100000).toFixed(2)} Lakhs`,
      areaSqFt: numericSqFt,
      areaCents: cents,
      dimensions,
      facing,
      roadWidth,
      layoutPlotNumber,
      approval,
      approvalNumber,
      pattaStatus,
      surveyNumber,
      description,
      status: 'Available',
      sellerId: seller?.id || 'sel-1',
      sellerName: seller?.companyName || seller?.name || 'Muthu Promoters',
      sellerPhone: seller?.phone || '+91 98421 55678',
      sellerVerified: seller?.isVerified !== undefined ? seller.isVerified : true,
      images: [
        '/images/plots/demarcated-plot.jpg',
        '/images/plots/corner-plot-avenue.jpg',
        '/images/plots/dtcp-masterplan-blueprint.jpg',
      ],
      amenities: [
        '30 ft Blacktop Tar Road',
        'Overhead TNEB Electricity Lines',
        'Sweet Drinking Groundwater',
        'Individual Concrete Boundary Stones',
        'Solar LED Street Lighting',
        'Up to 90% Bank Loan Approved',
      ],
    };

    try {
      const res = await fetch('/api/plots', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newPlotData),
      });

      const data = await res.json();
      if (data.success) {
        router.push('/seller/properties');
      } else {
        setError(data.error || 'Failed to save property listing');
      }
    } catch {
      setError('Server unreachable. Could not save plot.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <div className="flex items-center space-x-3 mb-6">
        <Link
          href="/seller/properties"
          className="p-2 rounded-lg border border-gray-300 text-gray-600 hover:text-emerald-700 hover:bg-emerald-50 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
        </Link>
        <div>
          <h1 className="text-2xl font-black text-gray-900 tracking-tight">Add New Plot Listing</h1>
          <p className="text-xs text-gray-500">
            Publish verified residential land to thousands of active Thoothukudi buyers
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 shadow-xs p-6 sm:p-8">
        {error && (
          <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Section 1: Basic Details */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-3 pb-1 border-b border-gray-100 flex items-center space-x-1.5">
              <Building className="w-4 h-4 text-emerald-600" />
              <span>1. Property &amp; Layout Information</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Listing Title *
                </label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g. DTCP Approved 3 Cents Corner Plot in Korampallam"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Project / Layout Name
                </label>
                <input
                  type="text"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  placeholder="e.g. Jain Housing Aura Phase II"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Plot # / Phase
                </label>
                <input
                  type="text"
                  value={layoutPlotNumber}
                  onChange={(e) => setLayoutPlotNumber(e.target.value)}
                  placeholder="e.g. Plot #18, Phase 1"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Location / Address
                </label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Korampallam, Thoothukudi"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Locality Corridor
                </label>
                <select
                  value={locality}
                  onChange={(e) => setLocality(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none bg-white"
                >
                  <option value="Korampallam">Korampallam</option>
                  <option value="Millerpuram">Millerpuram</option>
                  <option value="Palayamkottai Road">Palayamkottai Road</option>
                  <option value="Tharuvaikulam">Tharuvaikulam (ECR)</option>
                  <option value="Harbour Bypass">Harbour Bypass</option>
                  <option value="Ettayapuram Road">Ettayapuram Road</option>
                </select>
              </div>
            </div>
          </div>

          {/* Section 2: Dimensions & Pricing */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-3 pb-1 border-b border-gray-100 flex items-center space-x-1.5">
              <IndianRupee className="w-4 h-4 text-emerald-600" />
              <span>2. Dimensions, Area &amp; Pricing</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Total Price (₹ INR) *
                </label>
                <input
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  placeholder="1450000"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none font-bold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Area in Square Feet *
                </label>
                <input
                  type="number"
                  required
                  value={areaSqFt}
                  onChange={(e) => setAreaSqFt(e.target.value)}
                  placeholder="1200"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
                <span className="text-[10px] text-emerald-700 font-semibold mt-1 block">
                  = {calculateCents(Number(areaSqFt) || 0)} Cents
                </span>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Dimensions (L x W)
                </label>
                <input
                  type="text"
                  value={dimensions}
                  onChange={(e) => setDimensions(e.target.value)}
                  placeholder="30 ft x 40 ft"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Facing Direction
                </label>
                <select
                  value={facing}
                  onChange={(e) => setFacing(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none bg-white"
                >
                  <option value="East">East</option>
                  <option value="North">North</option>
                  <option value="South">South</option>
                  <option value="West">West</option>
                  <option value="North-East Corner">North-East Corner</option>
                  <option value="South-East Corner">South-East Corner</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Road Width
                </label>
                <input
                  type="text"
                  value={roadWidth}
                  onChange={(e) => setRoadWidth(e.target.value)}
                  placeholder="30 ft Blacktop Tar Road"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 3: Legal Approvals */}
          <div>
            <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 mb-3 pb-1 border-b border-gray-100 flex items-center space-x-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>3. Legal Clearances &amp; Revenue Records</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Approval Authority
                </label>
                <select
                  value={approval}
                  onChange={(e) => setApproval(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none bg-white"
                >
                  <option value="DTCP Approved">DTCP Approved</option>
                  <option value="DTCP & RERA Approved">DTCP &amp; RERA Approved</option>
                  <option value="RERA Registered">RERA Registered</option>
                  <option value="Panchayat Approved">Panchayat Approved</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Revenue Survey Number
                </label>
                <input
                  type="text"
                  value={surveyNumber}
                  onChange={(e) => setSurveyNumber(e.target.value)}
                  placeholder="SF No. 342/2B"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                  Patta &amp; EC Status
                </label>
                <input
                  type="text"
                  value={pattaStatus}
                  onChange={(e) => setPattaStatus(e.target.value)}
                  placeholder="Clear Legal Patta & 30-Year Nil EC"
                  className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Description */}
          <div>
            <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
              Plot Description &amp; Highlights
            </label>
            <textarea
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-end space-x-3">
            <Link
              href="/seller/properties"
              className="px-4 py-2.5 text-xs font-bold text-gray-600 hover:text-gray-900"
            >
              Cancel
            </Link>
            <button
              type="submit"
              disabled={saving}
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl transition-colors shadow-xs disabled:opacity-50"
            >
              {saving ? 'Publishing Plot...' : 'Publish Plot Listing'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
