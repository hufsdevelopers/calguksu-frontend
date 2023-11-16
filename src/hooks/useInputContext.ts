import { useContext } from 'react';
import InputContext from '@/context/InputContext';

const useInputContext = () => {
  const context = useContext(InputContext);
  if (context === undefined) {
    throw new Error('useInputContext must be used within an InputProvider');
  }
  return context;
};

export default useInputContext;