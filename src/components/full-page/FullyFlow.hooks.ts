'use client';
import { useContext } from 'react';
import FullyFlowContext from '@/context/FullyFlowContext';

const useFullyFlow = () => {
  const context = useContext(FullyFlowContext);
  if (!context) {
    throw new Error('useFullyFlow must be used within a FullyFlowProvider');
  }
  return context;
};

export default useFullyFlow;