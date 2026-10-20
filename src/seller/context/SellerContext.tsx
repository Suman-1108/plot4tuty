'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Seller, SellerSubscription } from '@/lib/types';
import { useRouter } from 'next/navigation';

interface SellerContextType {
  seller: Seller | null;
  subscription: SellerSubscription | null;
  loading: boolean;
  login: (seller: Seller) => void;
  logout: () => void;
  refreshSellerData: () => Promise<void>;
  updateSeller: (updated: Partial<Seller>) => void;
}

const SellerContext = createContext<SellerContextType | undefined>(undefined);

const DEMO_SELLER: Seller = {
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
  createdAt: '2026-01-10',
};

export function SellerProvider({ children }: { children: React.ReactNode }) {
  const [seller, setSeller] = useState<Seller | null>(null);
  const [subscription, setSubscription] = useState<SellerSubscription | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const fetchSeller = async (sellerId: string) => {
    try {
      const [sellersRes, subRes] = await Promise.all([
        fetch('/api/sellers'),
        fetch(`/api/subscriptions?sellerId=${sellerId}`),
      ]);

      const sellersData = await sellersRes.json();
      const subData = await subRes.json();

      if (sellersData.success && Array.isArray(sellersData.sellers)) {
        const found = sellersData.sellers.find((s: Seller) => s.id === sellerId);
        if (found) {
          setSeller(found);
        } else {
          setSeller(DEMO_SELLER);
        }
      } else {
        setSeller(DEMO_SELLER);
      }

      if (subData.success && subData.activeSubscription) {
        setSubscription(subData.activeSubscription);
      } else {
        // Fallback subscription
        setSubscription({
          id: 'sub-1',
          sellerId,
          planId: 'developer-pro',
          planName: 'Developer Pro (Layout Promoters)',
          status: 'active',
          startDate: '2026-03-01',
          endDate: '2026-04-01',
          listingsUsed: 3,
          listingLimit: 50,
          amountPaid: 8258.82,
          invoiceNumber: 'INV-2026-001',
        });
      }
    } catch (e) {
      console.error('Failed to load seller session:', e);
      setSeller(DEMO_SELLER);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // Check saved seller ID from localStorage
    try {
      const savedSellerId = localStorage.getItem('plot4tuty_seller_id') || 'sel-1';
      fetchSeller(savedSellerId);
    } catch {
      fetchSeller('sel-1');
    }
  }, []);

  const login = (newSeller: Seller) => {
    setSeller(newSeller);
    try {
      localStorage.setItem('plot4tuty_seller_id', newSeller.id);
    } catch {}
    fetchSeller(newSeller.id);
  };

  const logout = async () => {
    try {
      localStorage.removeItem('plot4tuty_seller_id');
      await fetch('/api/auth', { method: 'DELETE' });
    } catch {}
    setSeller(null);
    setSubscription(null);
    router.push('/seller/login');
  };

  const refreshSellerData = async () => {
    if (seller) {
      await fetchSeller(seller.id);
    }
  };

  const updateSeller = (updated: Partial<Seller>) => {
    if (seller) {
      setSeller({ ...seller, ...updated });
    }
  };

  return (
    <SellerContext.Provider
      value={{ seller, subscription, loading, login, logout, refreshSellerData, updateSeller }}
    >
      {children}
    </SellerContext.Provider>
  );
}

export function useSeller() {
  const context = useContext(SellerContext);
  if (!context) {
    throw new Error('useSeller must be used within a SellerProvider');
  }
  return context;
}
