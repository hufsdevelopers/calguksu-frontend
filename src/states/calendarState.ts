import { atom } from 'recoil';
import { CalendarOptionType } from '@/types/calendar-types';

export const selectedCalendarOptionState = atom<CalendarOptionType | null>({
  key: 'selectedCalendarOptionState',
  default: null,
});

export const inputEmailState = atom<string>({
  key: 'inputEmailState',
  default: '',
});

export const agreedPrivacyPolicyState = atom<boolean>({
  key: 'agreedPrivacyPolicyState',
  default: false,
});
