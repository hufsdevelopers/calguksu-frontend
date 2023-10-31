'use client';
import { useCallback, useEffect, useState } from 'react';

declare global {
  interface Window {
    __theme?: string;
  }
}

const themeNames = {
  LIGHT: 'light',
  DARK: 'dark',
};

export const useTheme = () => {
  const [theme, setTheme] = useState<string>(themeNames.LIGHT);

  const setPreferredTheme = useCallback((newTheme: string) => {
    setTheme(newTheme);
    window.__theme = newTheme;
    document.body.className = newTheme;
    try {
      localStorage.setItem('theme', newTheme);
    } catch (err) {
      console.error('Could not save theme to localStorage', err);
    }
  }, []);

  const toggleTheme = useCallback(() => {
    setPreferredTheme(theme === themeNames.LIGHT ? themeNames.DARK : themeNames.LIGHT);
  }, [theme, setPreferredTheme]);

  useEffect(() => {
    const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    const listener = (e: MediaQueryListEvent) => {
      setPreferredTheme(e.matches ? themeNames.DARK : themeNames.LIGHT);
    };

    const initialTheme = window.__theme || localStorage.getItem('theme') || (mediaQueryList.matches ? themeNames.DARK : themeNames.LIGHT);
    setPreferredTheme(initialTheme);

    mediaQueryList.addEventListener('change', listener);

    return () => {
      mediaQueryList.removeEventListener('change', listener);
    };
  }, [setPreferredTheme]);

  return { theme, toggleTheme };
};