'use client';
import React, { ReactNode, useEffect, useState } from 'react';
import ToastContext, { Toast } from '@/components/common/Toast/Toast.context';

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: 'success' | 'error', duration: number = 3000) => {
    setToast({ message, type, duration });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), toast.duration + 1000);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ToastContext.Provider value={{ showToast, toast }}>
      {children}
    </ToastContext.Provider>
  );
};