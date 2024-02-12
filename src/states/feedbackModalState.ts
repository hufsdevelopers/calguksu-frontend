import { atom } from 'recoil';

export const feedbackModalState = atom<boolean>({
  key: 'feedbackModalState',
  default: false,
});