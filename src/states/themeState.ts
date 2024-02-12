import { atom } from 'recoil';

const getLocalTheme = (): string | undefined => {
  if (typeof window !== 'undefined') {
    const storedTheme: string | null = localStorage.getItem('theme');
    if (storedTheme) return storedTheme;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return undefined;
};

export const themeState = atom<string | undefined>({
  key: 'themeState',
  default: getLocalTheme(),
});