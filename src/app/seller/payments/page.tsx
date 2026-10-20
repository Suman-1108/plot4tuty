'use client';

import { useState, useEffect } from 'react';
import { useSeller } from '@/seller/context/SellerContext';
import { PaymentRecord } from '@/lib/types';
import {
  Receipt,
  Download,
  CreditCard,
  CheckCircle2,
  Clock,
  Printer,
  X,
  ShieldCheck,
  FileText,
} from 'lucide-react';

export default function SellerPaymentsPage() {
  const { seller } = useSeller();
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedInvoice, setSelectedInvoice] = useState<PaymentRecord | null>(null);

  useEffect(() => {
    fetchPayments();
  }, [seller]);

  const fetchPayments = async () => {
    try {
      const res = await fetch(`/api/payments?sellerId=${seller?.id || 'sel-1'}`);
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

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
          Payment History &amp; GST Invoices
        </h1>
        <p className="text-xs text-gray-500 mt-1">
          Download compliant digital GST tax invoices and audit transaction logs
        </p>
      </div>

      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xs">Loading billing transactions...</div>
      ) : payments.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <Receipt className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-900">No payment records yet</h3>
          <p className="text-xs text-gray-500 mt-1">
            When you purchase or renew a subscription plan, your invoices will appear here.
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#FAFBF9] border-b border-gray-200 text-gray-500 font-bold uppercase tracking-wider text-[10px]">
                <tr>
                  <th className="px-6 py-3.5">Invoice #</th>
                  <th className="px-6 py-3.5">Date</th>
                  <th className="px-6 py-3.5">Plan / Description</th>
                  <th className="px-6 py-3.5">Base (INR)</th>
                  <th className="px-6 py-3.5">GST (18%)</th>
                  <th className="px-6 py-3.5">Total Paid</th>
                  <th className="px-6 py-3.5">Status</th>
                  <th className="px-6 py-3.5 text-right">Invoice</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-gray-700">
                {payments.map((pay) => (
                  <tr key={pay.id} className="hover:bg-gray-50/80 transition-colors">
                    <td className="px-6 py-4 font-bold text-gray-900">
                      {pay.invoiceNumber}
                    </td>
                    <td className="px-6 py-4 text-gray-500">
                      {new Date(pay.createdAt).toLocaleDateString('en-IN', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>
                    <td className="px-6 py-4 font-semibold text-gray-800">
                      {pay.planId === 'developer-pro'
                        ? 'Developer Pro (50 Plots)'
                        : pay.planId === 'growth'
                        ? 'Growth Plan (10 Plots)'
                        : 'Starter Plan (2 Plots)'}
                    </td>
                    <td className="px-6 py-4">₹{pay.amount?.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 text-gray-500">₹{pay.gstAmount?.toLocaleString('en-IN')}</td>
                    <td className="px-6 py-4 font-black text-emerald-800">
                      ₹{pay.totalAmount?.toLocaleString('en-IN')}
                    </td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        <span>{pay.status}</span>
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedInvoice(pay)}
                        className="inline-flex items-center space-x-1 text-emerald-700 hover:text-emerald-900 font-bold hover:underline"
                      >
                        <FileText className="w-3.5 h-3.5" />
                        <span>View / Print</span>
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

            {/* Printable Invoice Header */}
            <div className="border-b border-gray-200 pb-5 mb-5 flex justify-between items-start">
              <div>
                <span className="text-xs font-black text-emerald-800 uppercase tracking-widest block mb-1">
                  TAX INVOICE (GST COMPLIANT)
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

            {/* Billed To */}
            <div className="bg-[#FAFBF9] p-4 rounded-xl border border-gray-200 mb-5 text-xs text-gray-700">
              <span className="text-[10px] uppercase font-bold text-gray-400 block mb-1">Billed To (Seller):</span>
              <div className="font-bold text-gray-900">{selectedInvoice.sellerName}</div>
              <div>Seller ID: {selectedInvoice.sellerId}</div>
              <div>Transaction ID: {selectedInvoice.transactionId}</div>
              <div>Payment Mode: {selectedInvoice.paymentGateway}</div>
            </div>

            {/* Line Items */}
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

            {/* Total */}
            <div className="flex justify-between items-center text-sm font-black text-emerald-800 mb-6">
              <span>Total Amount Paid:</span>
              <span>₹{selectedInvoice.totalAmount?.toLocaleString('en-IN')}</span>
            </div>

            <div className="flex justify-end space-x-3 print:hidden">
              <button
                onClick={handlePrint}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl text-xs font-bold flex items-center space-x-1.5"
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
