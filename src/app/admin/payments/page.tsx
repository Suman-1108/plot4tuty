'use client';

import { useState, useEffect } from 'react';
import { PaymentRecord } from '@/lib/types';
import {
  Receipt,
  IndianRupee,
  Search,
  CheckCircle2,
  Calendar,
  CreditCard,
  FileText,
  Printer,
  X,
} from 'lucide-react';

export default function AdminPaymentsPage() {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [selectedInvoice, setSelectedInvoice] = useState<PaymentRecord | null>(null);

  useEffect(() => {
    fetchPayments();
  }, []);

  const fetchPayments = async () => {
    try {
      const res = await fetch('/api/payments');
      const data = await res.json();
      if (data.success && Array.isArray(data.payments)) {
        setPayments(data.payments);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const totalRevenue = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + (p.totalAmount || 0), 0);

  const totalGst = payments
    .filter((p) => p.status === 'Completed')
    .reduce((sum, p) => sum + (p.gstAmount || 0), 0);

  const filtered = payments.filter(
    (p) =>
      p.invoiceNumber.toLowerCase().includes(search.toLowerCase()) ||
      p.sellerName.toLowerCase().includes(search.toLowerCase()) ||
      p.transactionId.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      <div>
        <h1 className="text-2xl font-black text-gray-900 tracking-tight">
          Financial Audit &amp; Payment Ledger ({payments.length})
        </h1>
        <p className="text-xs text-gray-500">
          Auditable registry of all subscription fees, GST receipts, and transaction records
        </p>
      </div>

      {/* Financial Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <span className="text-xs font-semibold text-gray-400 block mb-1">Gross Collections</span>
          <div className="text-2xl sm:text-3xl font-black text-gray-900">
            ₹{Math.round(totalRevenue).toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-emerald-700 font-semibold mt-1 block">
            {payments.length} Completed Invoices
          </span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <span className="text-xs font-semibold text-gray-400 block mb-1">18% GST Remittance</span>
          <div className="text-2xl sm:text-3xl font-black text-emerald-800">
            ₹{Math.round(totalGst).toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-gray-500 mt-1 block">CGST (9%) + SGST (9%)</span>
        </div>

        <div className="bg-white p-5 rounded-2xl border border-gray-200 shadow-xs">
          <span className="text-xs font-semibold text-gray-400 block mb-1">Net Platform Revenue</span>
          <div className="text-2xl sm:text-3xl font-black text-purple-900">
            ₹{Math.round(totalRevenue - totalGst).toLocaleString('en-IN')}
          </div>
          <span className="text-[11px] text-purple-700 font-semibold mt-1 block">Excluding Tax</span>
        </div>
      </div>

      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs flex items-center justify-between">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by invoice #, seller, tx ID..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xs">Loading payment records...</div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAFBF9] border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-5 py-3.5">Invoice #</th>
                  <th className="px-5 py-3.5">Seller / Partner</th>
                  <th className="px-5 py-3.5">Date</th>
                  <th className="px-5 py-3.5">Base (INR)</th>
                  <th className="px-5 py-3.5">18% GST</th>
                  <th className="px-5 py-3.5">Total Paid</th>
                  <th className="px-5 py-3.5">Gateway / Tx ID</th>
                  <th className="px-5 py-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {filtered.map((pay) => (
                  <tr key={pay.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-5 py-4 font-bold text-gray-900">{pay.invoiceNumber}</td>
                    <td className="px-5 py-4">
                      <div className="font-semibold text-gray-900">{pay.sellerName}</div>
                      <div className="text-[10px] text-gray-400">ID: {pay.sellerId}</div>
                    </td>
                    <td className="px-5 py-4 text-gray-500">
                      {new Date(pay.createdAt).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-5 py-4">₹{pay.amount?.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-4 text-gray-500">₹{pay.gstAmount?.toLocaleString('en-IN')}</td>
                    <td className="px-5 py-4 font-black text-emerald-800">
                      ₹{pay.totalAmount?.toLocaleString('en-IN')}
                    </td>
                    <td className="px-5 py-4">
                      <div className="font-semibold">{pay.paymentGateway}</div>
                      <div className="text-[10px] text-gray-400 font-mono">{pay.transactionId}</div>
                    </td>
                    <td className="px-5 py-4 text-right">
                      <button
                        onClick={() => setSelectedInvoice(pay)}
                        className="text-emerald-700 hover:text-emerald-900 font-bold inline-flex items-center space-x-1"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>Invoice</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Invoice Modal */}
      {selectedInvoice && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-gray-200 relative">
            <button
              onClick={() => setSelectedInvoice(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 print:hidden"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="border-b border-gray-200 pb-5 mb-5 flex justify-between items-start">
              <div>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-widest block mb-1">
                  OFFICIAL TAX INVOICE
                </span>
                <h3 className="text-xl font-black text-gray-900">PLOT FOR THOOTHUKUDI</h3>
                <p className="text-[11px] text-gray-500">
                  No. 42/B, Palayamkottai Road, Thoothukudi – 628003, Tamil Nadu
                </p>
                <p className="text-[11px] text-gray-500">GSTIN: 33AAACP9821K1Z8</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-gray-900 block">{selectedInvoice.invoiceNumber}</span>
                <span className="text-[11px] text-gray-500 block">
                  {new Date(selectedInvoice.createdAt).toLocaleDateString('en-IN')}
                </span>
              </div>
            </div>

            <div className="bg-[#FAFBF9] p-4 rounded-xl border border-gray-200 mb-5 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Billed To (Partner):</span>
              <div className="font-bold text-gray-900">{selectedInvoice.sellerName}</div>
              <div>Seller ID: {selectedInvoice.sellerId}</div>
              <div>Transaction ID: {selectedInvoice.transactionId}</div>
              <div>Payment Mode: {selectedInvoice.paymentGateway}</div>
            </div>

            <div className="space-y-2 text-xs border-b border-gray-200 pb-4 mb-4">
              <div className="flex justify-between font-bold text-gray-700">
                <span>Description</span>
                <span>Amount</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Subscription Plan ({selectedInvoice.planId}) - 30 Days</span>
                <span>₹{selectedInvoice.amount?.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>CGST (9%) + SGST (9%)</span>
                <span>₹{selectedInvoice.gstAmount?.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm font-black text-emerald-800 mb-6">
              <span>Total Amount:</span>
              <span>₹{selectedInvoice.totalAmount?.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-end space-x-3 print:hidden">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5"
              >
                <Printer className="w-4 h-4" />
                <span>Print Invoice</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
