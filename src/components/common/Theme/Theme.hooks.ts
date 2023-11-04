import { useContext } from 'react';
import ThemeContext from '@/components/common/Theme/Theme.context';

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('themeHooks must be used within a ThemeProvider');
  }
  return context;
};