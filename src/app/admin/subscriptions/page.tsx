'use client';

import { useState, useEffect } from 'react';
import { SellerSubscription, SubscriptionPlan } from '@/lib/types';
import { SUBSCRIPTION_PLANS } from '@/lib/subscription-plans';
import {
  CreditCard,
  CheckCircle2,
  Calendar,
  AlertCircle,
  Sparkles,
  ShieldCheck,
  RefreshCw,
} from 'lucide-react';

export default function AdminSubscriptionsPage() {
  const [subscriptions, setSubscriptions] = useState<SellerSubscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubs();
  }, []);

  const fetchSubs = async () => {
    try {
      const res = await fetch('/api/subscriptions');
      const data = await res.json();
      if (data.success && Array.isArray(data.subscriptions)) {
        setSubscriptions(data.subscriptions);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Subscription Management &amp; Listing Plans
        </h1>
        <p className="text-xs text-gray-500">
          Configure seller subscription tiers, monitor listing limits, and audit active renewals
        </p>
      </div>

      {/* Available Plans Cards */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">
          Marketplace Subscription Tiers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SUBSCRIPTION_PLANS.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl border border-gray-200 p-6 shadow-xs hover:border-emerald-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-base font-black text-gray-900">{plan.name}</h3>
                  {plan.badge && (
                    <span className="text-[10px] font-bold bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                      {plan.badge}
                    </span>
                  )}
                </div>
                <div className="text-2xl font-black text-gray-900 mb-2">
                  ₹{plan.price.toLocaleString('en-IN')} <span className="text-xs font-normal text-gray-500">/ mo</span>
                </div>
                <div className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg mb-4">
                  Max {plan.listingLimit} Active Plot Listings
                </div>
                <div className="space-y-1.5 text-xs text-gray-600">
                  {plan.features.map((f, i) => (
                    <div key={i} className="flex items-center space-x-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Active Seller Subscriptions Table */}
      <div>
        <h2 className="text-sm font-bold uppercase tracking-wider text-gray-700 mb-3">
          Active Seller Subscriptions ({subscriptions.length})
        </h2>

        {loading ? (
          <div className="text-center py-12 text-gray-500 text-xs">Loading subscriptions...</div>
        ) : (
          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#FAFBF9] border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                  <tr>
                    <th className="px-5 py-3.5">Seller ID</th>
                    <th className="px-5 py-3.5">Plan Name</th>
                    <th className="px-5 py-3.5">Validity Period</th>
                    <th className="px-5 py-3.5">Listings Used / Limit</th>
                    <th className="px-5 py-3.5">Amount Paid</th>
                    <th className="px-5 py-3.5">Invoice #</th>
                    <th className="px-5 py-3.5 text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-gray-700">
                  {subscriptions.map((sub) => (
                    <tr key={sub.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="px-5 py-4 font-bold text-gray-900">{sub.sellerId}</td>
                      <td className="px-5 py-4 font-semibold text-emerald-900">{sub.planName}</td>
                      <td className="px-5 py-4 text-gray-500">
                        {sub.startDate} to {sub.endDate}
                      </td>
                      <td className="px-5 py-4">
                        <span className="font-bold text-gray-900">{sub.listingsUsed}</span> of {sub.listingLimit} plots
                      </td>
                      <td className="px-5 py-4 font-black text-gray-900">
                        ₹{sub.amountPaid?.toLocaleString('en-IN')}
                      </td>
                      <td className="px-5 py-4 text-gray-500">{sub.invoiceNumber}</td>
                      <td className="px-5 py-4 text-right">
                        <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 capitalize">
                          {sub.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
