'use client';

import { useState, useEffect } from 'react';
import { useSeller } from '@/seller/context/SellerContext';
import { Enquiry } from '@/lib/types';
import {
  MessageSquare,
  Phone,
  Mail,
  Calendar,
  CheckCircle2,
  Clock,
  MapPin,
  Save,
  Search,
  Filter,
  ExternalLink,
  ChevronRight,
} from 'lucide-react';

export default function SellerEnquiriesPage() {
  const { seller } = useSeller();
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [search, setSearch] = useState('');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [sellerNotes, setSellerNotes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    fetchEnquiries();
  }, []);

  const fetchEnquiries = async () => {
    try {
      const res = await fetch('/api/enquiries');
      const data = await res.json();
      if (data.success) {
        setEnquiries(data.enquiries);
        const notesMap: { [key: string]: string } = {};
        data.enquiries.forEach((e: Enquiry) => {
          notesMap[e.id] = e.sellerNotes || '';
        });
        setSellerNotes(notesMap);
      }
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id: string, newStatus: Enquiry['status']) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: newStatus,
          sellerNotes: sellerNotes[id] || '',
        }),
      });
      const data = await res.json();
      if (data.success) {
        setEnquiries((prev) =>
          prev.map((e) => (e.id === id ? { ...e, status: newStatus } : e))
        );
      }
    } catch (e) {
      console.error(e);
    } finally {
      setUpdatingId(null);
    }
  };

  const saveNote = async (id: string) => {
    setUpdatingId(id);
    try {
      const enq = enquiries.find((e) => e.id === id);
      await fetch(`/api/enquiries/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          status: enq?.status || 'New',
          sellerNotes: sellerNotes[id] || '',
        }),
      });
    } catch (e) {
      console.error(e);
    } finally {
      setUpdatingId(null);
    }
  };

  const filtered = enquiries.filter((e) => {
    const matchesSearch =
      e.name.toLowerCase().includes(search.toLowerCase()) ||
      e.phone.includes(search) ||
      (e.message && e.message.toLowerCase().includes(search.toLowerCase()));
    const matchesStatus = statusFilter === 'All' || e.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight">
            Buyer Enquiries &amp; Site Visits ({enquiries.length})
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Respond directly to prospective plot buyers and schedule layout inspections
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white p-4 rounded-2xl border border-gray-200 shadow-xs mb-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-3" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by buyer name, phone..."
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
          />
        </div>

        <div className="flex items-center space-x-2 w-full md:w-auto overflow-x-auto pb-1 md:pb-0">
          {['All', 'New', 'Contacted', 'Site Visit', 'Closed'].map((st) => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-colors shrink-0 ${
                statusFilter === st
                  ? 'bg-emerald-700 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Enquiries List */}
      {loading ? (
        <div className="text-center py-16 text-gray-500 text-xs">Loading buyer enquiries...</div>
      ) : filtered.length === 0 ? (
        <div className="bg-white rounded-2xl border border-gray-200 p-12 text-center">
          <MessageSquare className="w-12 h-12 text-gray-300 mx-auto mb-3" />
          <h3 className="text-base font-bold text-gray-900">No enquiries found</h3>
          <p className="text-xs text-gray-500 mt-1">All new incoming leads will appear here.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {filtered.map((enq) => (
            <div
              key={enq.id}
              className="bg-white rounded-2xl border border-gray-200 p-5 shadow-xs hover:border-emerald-300 transition-all flex flex-col lg:flex-row lg:items-center justify-between gap-6"
            >
              <div className="space-y-2 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-base font-bold text-gray-900">{enq.name}</h3>
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                      enq.status === 'New'
                        ? 'bg-blue-100 text-blue-800'
                        : enq.status === 'Site Visit'
                        ? 'bg-amber-100 text-amber-800'
                        : enq.status === 'Contacted'
                        ? 'bg-purple-100 text-purple-800'
                        : 'bg-emerald-100 text-emerald-800'
                    }`}
                  >
                    {enq.status}
                  </span>
                  <span className="text-[11px] font-semibold text-gray-500 bg-gray-100 px-2 py-0.5 rounded">
                    {enq.enquiryType || 'General Enquiry'}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-600">
                  <a
                    href={`tel:${enq.phone}`}
                    className="flex items-center space-x-1 font-semibold text-emerald-800 hover:underline"
                  >
                    <Phone className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{enq.phone}</span>
                  </a>
                  {enq.email && (
                    <span className="flex items-center space-x-1">
                      <Mail className="w-3.5 h-3.5 text-gray-400" />
                      <span>{enq.email}</span>
                    </span>
                  )}
                  {enq.preferredLocation && (
                    <span className="flex items-center space-x-1">
                      <MapPin className="w-3.5 h-3.5 text-gray-400" />
                      <span>Interested: {enq.preferredLocation}</span>
                    </span>
                  )}
                  <span className="text-gray-400">
                    &bull; {new Date(enq.createdAt).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </div>

                <div className="p-3 bg-[#F4F5F0] rounded-xl text-xs text-gray-800 italic">
                  &quot;{enq.message}&quot;
                </div>

                {/* Seller Follow-up Notes */}
                <div className="flex items-center space-x-2 pt-1">
                  <input
                    type="text"
                    value={sellerNotes[enq.id] || ''}
                    onChange={(e) =>
                      setSellerNotes({ ...sellerNotes, [enq.id]: e.target.value })
                    }
                    placeholder="Add private note (e.g. Budget ₹15L, site visit Sun 10 AM)..."
                    className="flex-1 px-3 py-1.5 rounded-lg border border-gray-300 text-xs focus:ring-1 focus:ring-emerald-600 outline-none"
                  />
                  <button
                    onClick={() => saveNote(enq.id)}
                    disabled={updatingId === enq.id}
                    className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-gray-900 text-white text-xs font-semibold flex items-center space-x-1 shrink-0 transition-colors"
                  >
                    <Save className="w-3 h-3" />
                    <span>Save</span>
                  </button>
                </div>
              </div>

              {/* Action Column */}
              <div className="flex flex-col sm:flex-row lg:flex-col items-stretch lg:items-end justify-between gap-2.5 shrink-0 pt-3 lg:pt-0 border-t lg:border-t-0 border-gray-100">
                <a
                  href={`https://wa.me/${enq.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(
                    enq.name
                  )},%20thank%20you%20for%20your%20interest%20in%20our%20residential%20plots%20on%20Plot%20for%20Thoothukudi.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center space-x-1.5 px-4 py-2 rounded-xl bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300 text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>WhatsApp Buyer</span>
                </a>

                <div className="flex items-center space-x-1.5">
                  <span className="text-[11px] text-gray-500 font-semibold">Stage:</span>
                  <select
                    value={enq.status}
                    onChange={(e) => updateStatus(enq.id, e.target.value as any)}
                    className="px-2.5 py-1.5 text-xs font-bold rounded-lg border border-gray-300 bg-white text-gray-900 focus:ring-1 focus:ring-emerald-600 outline-none"
                  >
                    <option value="New">New</option>
                    <option value="Contacted">Contacted</option>
                    <option value="Site Visit">Site Visit Scheduled</option>
                    <option value="Closed">Closed / Deal Done</option>
                  </select>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
