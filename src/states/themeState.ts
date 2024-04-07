import { atom } from 'recoil';

export const themeState = atom<string | undefined>({
  key: 'themeState',
  default: 'dark',
});
