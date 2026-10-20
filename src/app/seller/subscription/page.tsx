'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useSeller } from '@/seller/context/SellerContext';
import { SUBSCRIPTION_PLANS } from '@/lib/subscription-plans';
import {
  Sparkles,
  CheckCircle2,
  CreditCard,
  Receipt,
  ShieldCheck,
  Calendar,
  AlertCircle,
  X,
  ArrowRight,
  Zap,
} from 'lucide-react';

export default function SellerSubscriptionPage() {
  const { seller, subscription, refreshSellerData } = useSeller();
  const [selectedPlanId, setSelectedPlanId] = useState<string>('growth');
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [paying, setPaying] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState<any>(null);

  const selectedPlan =
    SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId) || SUBSCRIPTION_PLANS[1];

  const basePrice = selectedPlan.price;
  const gstAmount = Math.round(basePrice * 0.18 * 100) / 100;
  const totalAmount = Math.round((basePrice + gstAmount) * 100) / 100;

  const handleProcessPayment = async () => {
    setPaying(true);
    try {
      const transactionId = `pay_rzp_${Date.now()}`;
      const res = await fetch('/api/payments/verify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          transactionId,
          sellerId: seller?.id || 'sel-1',
          sellerName: seller?.companyName || seller?.name || 'Partner Seller',
          sellerEmail: seller?.email || 'partner@plot4tuty.com',
          planId: selectedPlan.id,
          paymentGateway: 'Razorpay (Test Simulation)',
          signature: 'verified_sig_' + Math.random().toString(36).substring(7),
        }),
      });

      const data = await res.json();
      if (data.success) {
        setPaymentSuccess(data);
        await refreshSellerData();
      } else {
        alert(data.error || 'Payment failed');
      }
    } catch (e) {
      alert('Error connecting to payment gateway');
    } finally {
      setPaying(false);
    }
  };

  const usagePercent = subscription
    ? Math.min(Math.round((subscription.listingsUsed / (subscription.listingLimit || 1)) * 100), 100)
    : 10;

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Title */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Seller Subscription &amp; Listing Plans
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Scale your inventory visibility and access verified residential plot buyers across Thoothukudi
        </p>
      </div>

      {/* Current Active Plan Banner */}
      {subscription && (
        <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-100">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider">
                  Active Subscription
                </span>
                <span className="text-xs text-gray-400">Invoice: {subscription.invoiceNumber}</span>
              </div>
              <h2 className="text-2xl font-black text-gray-900">{subscription.planName}</h2>
              <p className="text-xs text-gray-500 mt-1">
                Valid from {subscription.startDate} until {subscription.endDate}
              </p>
            </div>

            <div className="text-left md:text-right">
              <span className="text-xs text-gray-400 block">Subscription Fee Paid</span>
              <span className="text-2xl font-black text-emerald-800">
                ₹{subscription.amountPaid?.toLocaleString('en-IN')}
              </span>
              <span className="text-[10px] text-gray-500 block">incl. 18% GST</span>
            </div>
          </div>

          {/* Usage Bar */}
          <div className="pt-6">
            <div className="flex items-center justify-between text-xs font-bold text-gray-700 mb-2">
              <span>Listing Capacity Utilization</span>
              <span>
                {subscription.listingsUsed} of {subscription.listingLimit} Plots Listed ({usagePercent}%)
              </span>
            </div>
            <div className="w-full h-3 rounded-full bg-gray-100 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ${
                  usagePercent >= 90 ? 'bg-amber-500' : 'bg-emerald-600'
                }`}
                style={{ width: `${usagePercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Upgrade / Change Plan Cards */}
      <div className="mb-6">
        <h2 className="text-lg font-black text-gray-900 mb-1">Choose or Upgrade Your Plan</h2>
        <p className="text-xs text-gray-500">
          Transparent monthly subscriptions with zero hidden brokerage commissions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {SUBSCRIPTION_PLANS.map((plan) => {
          const isCurrent = subscription?.planId === plan.id;
          return (
            <div
              key={plan.id}
              className={`rounded-2xl border p-6 flex flex-col justify-between transition-all bg-white ${
                plan.isPopular
                  ? 'border-emerald-500 shadow-md ring-2 ring-emerald-500/20'
                  : 'border-gray-200 shadow-xs hover:border-emerald-300'
              }`}
            >
              <div>
                {plan.badge && (
                  <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-3">
                    {plan.badge}
                  </span>
                )}
                <h3 className="text-lg font-black text-gray-900">{plan.name}</h3>
                <p className="text-xs text-gray-500 mt-1 mb-4">{plan.tagline}</p>

                <div className="flex items-baseline space-x-1 mb-4">
                  <span className="text-3xl font-black text-gray-900">
                    ₹{plan.price.toLocaleString('en-IN')}
                  </span>
                  <span className="text-xs text-gray-500">/ month + GST</span>
                </div>

                <div className="p-3 bg-[#F4F5F0] rounded-xl text-xs font-bold text-gray-800 mb-4">
                  Up to {plan.listingLimit} Active Plot Listings
                </div>

                <div className="space-y-2 mb-6">
                  {plan.features.map((feat, i) => (
                    <div key={i} className="flex items-start space-x-2 text-xs text-gray-600">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                {isCurrent ? (
                  <button
                    disabled
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-emerald-800 bg-emerald-50 border border-emerald-200 cursor-default"
                  >
                    Current Active Plan
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      setSelectedPlanId(plan.id);
                      setCheckoutModalOpen(true);
                    }}
                    className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-emerald-700 hover:bg-emerald-800 transition-colors shadow-xs"
                  >
                    Upgrade to {plan.name.split(' ')[0]}
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Checkout Modal */}
      {checkoutModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-2xl border border-gray-200 relative">
            <button
              onClick={() => {
                setCheckoutModalOpen(false);
                setPaymentSuccess(null);
              }}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-5 h-5" />
            </button>

            {paymentSuccess ? (
              <div className="text-center py-4 space-y-4">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-black text-gray-900">Subscription Activated!</h3>
                <p className="text-xs text-gray-600">
                  Your listing limit is now increased to {paymentSuccess.subscription?.listingLimit} plots.
                </p>
                <div className="p-3 bg-gray-50 rounded-xl text-xs text-left text-gray-700 space-y-1">
                  <div><strong>Invoice:</strong> {paymentSuccess.invoice?.invoiceNumber}</div>
                  <div><strong>Amount Paid:</strong> {paymentSuccess.invoice?.totalPaid}</div>
                  <div><strong>Transaction ID:</strong> {paymentSuccess.payment?.transactionId}</div>
                </div>
                <button
                  onClick={() => {
                    setCheckoutModalOpen(false);
                    setPaymentSuccess(null);
                  }}
                  className="w-full py-2.5 bg-emerald-700 text-white rounded-xl text-xs font-bold"
                >
                  Return to Dashboard
                </button>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-black text-gray-900 mb-1">
                  Confirm Subscription Upgrade
                </h3>
                <p className="text-xs text-gray-500 mb-4">
                  Review your tax invoice breakdown before checkout
                </p>

                <div className="bg-[#FAFBF9] border border-gray-200 rounded-xl p-4 space-y-2.5 text-xs mb-5">
                  <div className="flex justify-between text-gray-600">
                    <span>Plan:</span>
                    <span className="font-bold text-gray-900">{selectedPlan.name}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Listing Limit:</span>
                    <span className="font-bold text-gray-900">{selectedPlan.listingLimit} plots</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Base Subscription:</span>
                    <span className="font-bold text-gray-900">₹{basePrice.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>GST (18% Digital Services):</span>
                    <span className="font-bold text-gray-900">₹{gstAmount.toLocaleString('en-IN')}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200 flex justify-between text-sm font-black text-emerald-800">
                    <span>Total Amount Payable:</span>
                    <span>₹{totalAmount.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <button
                    onClick={handleProcessPayment}
                    disabled={paying}
                    className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl flex items-center justify-center space-x-2 shadow-md disabled:opacity-50"
                  >
                    <CreditCard className="w-4 h-4" />
                    <span>{paying ? 'Verifying Transaction...' : `Pay ₹${totalAmount.toLocaleString('en-IN')} & Activate`}</span>
                  </button>
                  <p className="text-[10px] text-center text-gray-400">
                    Instant activation with verified GST tax invoice &bull; 256-bit secure gateway
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
