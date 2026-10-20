'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface AdminContextType {
  isAuthenticated: boolean;
  loading: boolean;
  stats: any;
  login: (password: string) => Promise<{ success: boolean; error?: string }>;
  logout: () => Promise<void>;
  refreshStats: () => Promise<void>;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export function AdminProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState<any>(null);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      const res = await fetch('/api/auth');
      const data = await res.json();
      if (data.isAdmin || data.authenticated) {
        setIsAuthenticated(true);
        fetchStats();
      } else {
        // Check localStorage flag for persistent admin demo testing
        const stored = typeof window !== 'undefined' ? localStorage.getItem('plot4tuty_admin_auth') : null;
        if (stored === 'true') {
          setIsAuthenticated(true);
          fetchStats();
        } else {
          setIsAuthenticated(false);
        }
      }
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  };

  const fetchStats = async () => {
    try {
      const res = await fetch('/api/admin/stats');
      const data = await res.json();
      if (data.success) {
        setStats(data.stats);
      }
    } catch (e) {
      console.error('Error fetching admin stats:', e);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  const login = async (password: string) => {
    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ role: 'admin', password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
        try {
          localStorage.setItem('plot4tuty_admin_auth', 'true');
        } catch {}
        await fetchStats();
        return { success: true };
      }
      return { success: false, error: data.error || 'Invalid admin credentials' };
    } catch {
      return { success: false, error: 'Authentication service unreachable' };
    }
  };

  const logout = async () => {
    try {
      localStorage.removeItem('plot4tuty_admin_auth');
      await fetch('/api/auth', { method: 'DELETE' });
    } catch {}
    setIsAuthenticated(false);
    router.push('/admin/login');
  };

  const refreshStats = async () => {
    await fetchStats();
  };

  return (
    <AdminContext.Provider
      value={{ isAuthenticated, loading, stats, login, logout, refreshStats }}
    >
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  const context = useContext(AdminContext);
  if (!context) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
}
