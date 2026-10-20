'use client';

import { useState } from 'react';
import {
  Settings,
  ShieldCheck,
  Save,
  CheckCircle2,
  Bell,
  Lock,
  Database,
  RefreshCw,
} from 'lucide-react';

export default function AdminSettingsPage() {
  const [platformPhone, setPlatformPhone] = useState('+91 98421 55678');
  const [supportEmail, setSupportEmail] = useState('contact@plot4tuty.com');
  const [requireDtcpOrder, setRequireDtcpOrder] = useState(true);
  const [autoVerifySubscribers, setAutoVerifySubscribers] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const auditLogs = [
    { event: 'Seller Verified: S. Muthuraman (Muthu Promoters)', admin: 'Platform Administrator', time: 'Today at 02:45 PM' },
    { event: 'Subscription Activated: Growth Plan (sel-2)', admin: 'System Webhook (Razorpay)', time: 'Yesterday at 11:15 AM' },
    { event: 'Property Approved: Plot #ap-30 in Jain Housing Aura', admin: 'Platform Administrator', time: 'Mar 18, 2026' },
    { event: 'Database Backup Completed: 12 Plots & 7 Subscriptions', admin: 'Automated System Cron', time: 'Mar 17, 2026' },
  ];

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Platform Settings &amp; Security Audits
        </h1>
        <p className="text-xs text-gray-500">
          Configure marketplace compliance rules, contact channels, and review administrative audit logs
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
        {saved && (
          <div className="mb-6 p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Platform configurations updated successfully.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="space-y-6">
          <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 pb-2 border-b border-gray-100">
            Marketplace Verification Rules
          </h3>

          <div className="space-y-4">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={requireDtcpOrder}
                onChange={(e) => setRequireDtcpOrder(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <div>
                <span className="text-xs font-bold text-gray-900 block">
                  Mandatory DTCP / TNRERA Approval Order Verification
                </span>
                <span className="text-[11px] text-gray-500 block">
                  Flag listings without valid DTCP government order numbers for manual administrator review before public indexing.
                </span>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                type="checkbox"
                checked={autoVerifySubscribers}
                onChange={(e) => setAutoVerifySubscribers(e.target.checked)}
                className="mt-1 h-4 w-4 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
              />
              <div>
                <span className="text-xs font-bold text-gray-900 block">
                  Auto-Verify Developer Pro Subscribers
                </span>
                <span className="text-[11px] text-gray-500 block">
                  Automatically grant verified partner badge to developers on the Pro subscription tier after payment confirmation.
                </span>
              </div>
            </label>
          </div>

          <h3 className="text-xs font-black uppercase tracking-wider text-emerald-800 pt-4 pb-2 border-b border-gray-100">
            Platform Helpdesk &amp; Contact
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Customer Care Helpline
              </label>
              <input
                type="text"
                value={platformPhone}
                onChange={(e) => setPlatformPhone(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-gray-700 uppercase mb-1">
                Official Support Email
              </label>
              <input
                type="email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl border border-gray-300 text-xs text-gray-900 focus:ring-2 focus:ring-emerald-600 outline-none"
              />
            </div>
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="px-6 py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white text-xs font-bold rounded-xl flex items-center space-x-1.5 shadow-xs transition-colors"
            >
              <Save className="w-4 h-4" />
              <span>Save System Settings</span>
            </button>
          </div>
        </form>
      </div>

      {/* Audit Logs */}
      <div className="bg-white rounded-2xl border border-gray-200 p-6 sm:p-8 shadow-xs">
        <h3 className="text-sm font-black text-gray-900 mb-1">Administrative Audit Logs</h3>
        <p className="text-xs text-gray-500 mb-4">
          Immutable event log tracking administrative actions and system events
        </p>

        <div className="space-y-3">
          {auditLogs.map((log, i) => (
            <div
              key={i}
              className="p-3 bg-[#FAFBF9] rounded-xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-gray-700 gap-1"
            >
              <div>
                <span className="font-bold text-gray-900">{log.event}</span>
                <span className="text-[11px] text-gray-500 block">By: {log.admin}</span>
              </div>
              <span className="text-[10px] text-gray-400 font-mono">{log.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
