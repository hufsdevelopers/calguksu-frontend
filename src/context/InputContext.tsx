import React, { createContext } from 'react';
import { CalendarOptionType } from '@/types/select-types';

interface InputContextType {
  selectedCalendar: CalendarOptionType | null;
  setSelectedCalendar: React.Dispatch<React.SetStateAction<CalendarOptionType | null>>;
  inputtedEmail: string;
  setInputtedEmail: React.Dispatch<React.SetStateAction<string>>;
  privacyAgree: boolean;
  setPrivacyAgree: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export default InputContext;