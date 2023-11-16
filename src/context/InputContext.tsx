import React, { createContext } from 'react';

interface InputContextType {
  selectedCode: string | null;
  setSelectedCode: React.Dispatch<React.SetStateAction<string | null>>;
  inputtedEmail: string;
  setInputtedEmail: React.Dispatch<React.SetStateAction<string>>;
  privacyAgree: boolean;
  setPrivacyAgree: React.Dispatch<React.SetStateAction<boolean>>;
}

const InputContext = createContext<InputContextType | undefined>(undefined);

export default InputContext;