import React, { ReactNode, useEffect, useState } from 'react';

import InputContext from '@/context/InputContext';
import ThemeContext from '@/components/common/Theme/Theme.context';
import ToastContext, { Toast } from '@/components/common/Toast/Toast.context';

import { CalendarOptionType } from '@/types/select-types';

interface CalguksuProviderProps {
  children: ReactNode;
}

const getInitialTheme = () => {
  const storedTheme = localStorage.getItem('theme');
  if (storedTheme) return storedTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
};

const CalguksuProvider: React.FC<CalguksuProviderProps> = ({ children }) => {
  // Theme State
  const [theme, setTheme] = useState<string>('light');

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

  // Input State
  const [selectedCalendar, setSelectedCalendar] = useState<CalendarOptionType | null>(null);
  const [inputtedEmail, setInputtedEmail] = useState<string>('');
  const [privacyAgree, setPrivacyAgree] = useState<boolean>(false);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <InputContext.Provider
        value={{ selectedCalendar, setSelectedCalendar, inputtedEmail, setInputtedEmail, privacyAgree, setPrivacyAgree }}>
        <ToastContext.Provider value={{ showToast, toast }}>
          {children}
        </ToastContext.Provider>
      </InputContext.Provider>
    </ThemeContext.Provider>
  );
};

export default CalguksuProvider;