// components/AdminProtectedRoute.jsx
"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

export default function AdminProtectedRoute({ children }) {
  const { user, loading, isAdmin } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || !isAdmin)) {
      router.push('/unauthorized');
    }
  }, [user, loading, isAdmin, router]);

  if (loading) {
    return    <div className="flex justify-center items-center h-96">
    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-black"></div>
  </div>;
  }

  return isAdmin ? children : null;
}