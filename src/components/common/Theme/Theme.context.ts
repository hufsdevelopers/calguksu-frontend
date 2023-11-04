import { createContext } from 'react';

export interface ThemeContextProps {
  theme: string;
  toggleTheme: () => void;
}

const defaultState: ThemeContextProps = {
  theme: 'light',
  toggleTheme: () => {
  },
};

const ThemeContext = createContext<ThemeContextProps>(defaultState);

export default ThemeContext;
