import { useContext } from 'react';
import FullyFlowContext from '@/components/common/FullyFlow/FullyFlow.context';

const useFullyFlow = () => {
  const context = useContext(FullyFlowContext);
  if (!context) {
    throw new Error('useFullyFlow must be used within a Index');
  }
  return context;
};

export default useFullyFlow;