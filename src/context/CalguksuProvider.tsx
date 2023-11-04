import React, { ReactNode, useEffect, useState } from 'react';
import ThemeContext from '@/components/common/Theme/Theme.context';
import ToastContext, { Toast } from '@/components/common/Toast/Toast.context';

interface CalguksuProviderProps {
  children: ReactNode;
}

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

export const CalguksuProvider: React.FC<CalguksuProviderProps> = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState('undefined');

  useEffect(() => {
    setTheme(getInitialTheme());
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    window.__onThemeChange(newTheme);
  };

  // Toast State
  const [toast, setToast] = useState<Toast | null>(null);

  const showToast = (message: string, type: 'success' | 'error', duration: number = 3000) => {
    setToast({ message, type, duration });
  };

  useEffect(() => {
    if (toast) {
      const timer = setTimeout(() => setToast(null), toast.duration);
      return () => clearTimeout(timer);
    }
  }, [toast]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ToastContext.Provider value={{ showToast, toast }}>
        {children}
      </ToastContext.Provider>
    </ThemeContext.Provider>
  );
};
