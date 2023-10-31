import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#FFF',
  text: '#363537',
  background: '#E2E2E2',
};

export const darkTheme = {
  body: '#363537',
  text: '#FAFAFA',
  background: '#121212',
};

export const GlobalStyles = createGlobalStyle`
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
`;