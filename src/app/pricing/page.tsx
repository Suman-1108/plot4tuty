'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ShieldCheck,
  Check,
  X,
  CreditCard,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  HelpCircle,
  Phone
} from 'lucide-react';
import { SUBSCRIPTION_PLANS } from '@/lib/subscription-plans';

export default function PricingPage() {
  const [selectedPlan, setSelectedPlan] = useState<string>('growth');
  const [isAnnual, setIsAnnual] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const [activePlanForCheckout, setActivePlanForCheckout] = useState<any>(null);
  const [paying, setPaying] = useState(false);
  const [paymentResult, setPaymentResult] = useState<any>(null);

  const [checkoutForm, setCheckoutForm] = useState({
    name: 'S. Muthuraman',
    companyName: 'Muthu Promoters & Developers',
    email: 'muthu@plot4tuty.com',
    phone: '+91 98421 55678',
  });

  const handleStartCheckout = (plan: any) => {
    setActivePlanForCheckout(plan);
    setPaymentResult(null);
    setCheckoutModal(true);
  };

  const handleProcessPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setPaying(true);

    try {
      const mockTxn = `pay_rzp_live_${Date.now().toString().slice(-8)}`;
      const res = await fetch('/api/payments/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transactionId: mockTxn,
          sellerId: 'sel-1',
          sellerName: checkoutForm.companyName || checkoutForm.name,
          sellerEmail: checkoutForm.email,
          planId: activePlanForCheckout.id,
          paymentGateway: 'Razorpay Test Mode',
          signature: `sig_verified_${Date.now()}`
        }),
      });

      const data = await res.json();
      if (data.success) {
        setPaymentResult(data.invoice);
      } else {
        alert(data.error || 'Payment verification failed');
      }
    } catch {
      alert('Network error connecting to payment gateway');
    } finally {
      setPaying(false);
    }
  };

  return (
    <div className="py-12 sm:py-20 bg-[#F4F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-[11px] uppercase tracking-widest text-emerald-800 font-extrabold bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
            For Land Owners, Promoters &amp; Agents
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-gray-900 mt-3 tracking-tight">
            Transparent Seller Subscription Plans
          </h1>
          <p className="text-sm sm:text-base text-gray-600 mt-2">
            Publish verified residential land listings, connect directly with genuine buyers, and map plotted layouts in Thoothukudi.
          </p>

          {/* Billing Switcher */}
          <div className="mt-6 inline-flex items-center space-x-3 bg-white p-1 rounded-full border border-gray-300 shadow-xs">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${
                !isAnnual ? 'bg-emerald-700 text-white shadow-xs' : 'text-gray-600'
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all flex items-center space-x-1 ${
                isAnnual ? 'bg-emerald-700 text-white shadow-xs' : 'text-gray-600'
              }`}
            >
              <span>Annual Billing</span>
              <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded-full font-black">
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch mb-20">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const isPopular = plan.isPopular;
            const price = isAnnual ? Math.round(plan.price * 0.8 * 12) : plan.price;
            const period = isAnnual ? '/ year' : '/ month';

            return (
              <div
                key={plan.id}
                className={`rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  isPopular
                    ? 'bg-white border-2 border-emerald-600 shadow-xl scale-[1.02]'
                    : 'bg-white border border-gray-200 shadow-sm hover:shadow-md'
                }`}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-emerald-700 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full shadow-sm">
                    Most Popular for Agents
                  </div>
                )}

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-gray-900 mt-2">
                    {plan.name}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 min-h-[36px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="py-5 my-5 border-y border-gray-100">
                    <div className="flex items-baseline space-x-1">
                      <span className="text-3xl sm:text-4xl font-black text-gray-900">
                        ₹{price.toLocaleString('en-IN')}
                      </span>
                      <span className="text-xs text-gray-500 font-semibold">{period}</span>
                    </div>
                    <span className="text-[10px] text-gray-400 mt-0.5 block">
                      Excl. 18% GST • Instant Tax Invoice
                    </span>
                  </div>

                  <div className="space-y-3 text-xs mb-8">
                    <div className="font-bold text-gray-900">Includes:</div>
                    {plan.features.map((f, idx) => (
                      <div key={idx} className="flex items-start space-x-2 text-gray-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleStartCheckout(plan)}
                  className={`w-full py-3.5 rounded-xl text-xs font-extrabold uppercase tracking-wider transition-all flex items-center justify-center space-x-1.5 shadow-sm ${
                    isPopular
                      ? 'bg-emerald-700 hover:bg-emerald-800 text-white'
                      : 'bg-emerald-50 hover:bg-emerald-100 text-emerald-900 border border-emerald-300'
                  }`}
                >
                  <span>Select {plan.name.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>

        {/* Feature Comparison Matrix */}
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm p-6 sm:p-8 mb-16">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Detailed Feature Comparison Matrix
          </h2>

          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-200 text-gray-500 font-bold uppercase text-[10px]">
                  <th className="py-3 px-4">Feature &amp; Permission</th>
                  <th className="py-3 px-4">Starter (₹999)</th>
                  <th className="py-3 px-4">Growth (₹2,499)</th>
                  <th className="py-3 px-4">Developer Pro (₹6,999)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Active Listing Limit</td>
                  <td className="py-3 px-4">2 Plots</td>
                  <td className="py-3 px-4 font-bold text-emerald-700">10 Plots</td>
                  <td className="py-3 px-4 font-black text-emerald-800">50 Plots</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Interactive Masterplan Blueprint Layer</td>
                  <td className="py-3 px-4 text-gray-400">—</td>
                  <td className="py-3 px-4 text-gray-400">—</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">✓ Full SVG Mapping</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Direct Customer WhatsApp Leads</td>
                  <td className="py-3 px-4 text-emerald-700">✓ Included</td>
                  <td className="py-3 px-4 text-emerald-700">✓ Included</td>
                  <td className="py-3 px-4 text-emerald-700">✓ Included</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Featured Homepage Placement</td>
                  <td className="py-3 px-4 text-gray-400">—</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">✓ Included</td>
                  <td className="py-3 px-4 text-emerald-700 font-bold">✓ Top Hero Priority</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-bold text-gray-900">Document Verification Support (Patta / DTCP)</td>
                  <td className="py-3 px-4">Standard</td>
                  <td className="py-3 px-4 font-bold">Fast-Track (24h)</td>
                  <td className="py-3 px-4 font-bold text-emerald-800">Priority Legal Review</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Checkout Modal */}
        {checkoutModal && activePlanForCheckout && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 sm:p-8 shadow-2xl relative">
              <div className="flex justify-between items-center pb-3 border-b border-gray-200 mb-4">
                <h3 className="text-base font-black text-gray-900">
                  Subscribe to {activePlanForCheckout.name}
                </h3>
                <button
                  onClick={() => setCheckoutModal(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-700"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {paymentResult ? (
                <div className="text-center py-4 space-y-4">
                  <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">
                    Payment Verified &amp; Activated!
                  </h4>
                  <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 text-xs text-left space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-gray-500">Invoice:</span>
                      <span className="font-bold">{paymentResult.invoiceNumber}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">Total Paid (18% GST incl.):</span>
                      <span className="font-bold text-emerald-800">{paymentResult.totalPaid}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-500">New Plot Limit:</span>
                      <span className="font-bold text-emerald-800">{paymentResult.listingLimit} Plots</span>
                    </div>
                  </div>
                  <Link
                    href="/seller"
                    className="block w-full py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold"
                  >
                    Go to Seller Portal
                  </Link>
                </div>
              ) : (
                <form onSubmit={handleProcessPayment} className="space-y-3.5 text-xs">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">
                      Promoter / Company Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={checkoutForm.companyName}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, companyName: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold text-gray-600 uppercase mb-1">
                      Billing Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={checkoutForm.email}
                      onChange={(e) => setCheckoutForm({ ...checkoutForm, email: e.target.value })}
                      className="w-full px-3 py-2 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 focus:outline-none"
                    />
                  </div>

                  <div className="p-3 bg-gray-50 rounded-xl border border-gray-200 space-y-1">
                    <div className="flex justify-between text-gray-600">
                      <span>Base Plan Fee:</span>
                      <span>₹{activePlanForCheckout.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>GST (18%):</span>
                      <span>₹{(activePlanForCheckout.price * 0.18).toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-bold text-gray-900 pt-1 border-t border-gray-200">
                      <span>Total Payable:</span>
                      <span className="text-emerald-800 font-black">
                        ₹{(activePlanForCheckout.price * 1.18).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="text-[11px] text-gray-500 bg-emerald-50 p-2.5 rounded-lg border border-emerald-100 flex items-center space-x-1.5">
                    <ShieldCheck className="w-4 h-4 text-emerald-700 shrink-0" />
                    <span>Server-side verification active • Test mode enabled</span>
                  </div>

                  <button
                    type="submit"
                    disabled={paying}
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 disabled:opacity-50 text-white font-bold rounded-xl text-xs uppercase tracking-wider shadow-md"
                  >
                    {paying ? 'Verifying Transaction...' : 'Pay & Activate Subscription'}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
