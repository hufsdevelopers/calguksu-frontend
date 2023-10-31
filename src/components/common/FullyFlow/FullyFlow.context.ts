import { createContext } from 'react';

interface FullyFlowControls {
  moveDown: () => void;
  moveUp: () => void;
  moveToTop: () => void;
}

const FullyFlowContext = createContext<FullyFlowControls | undefined>(undefined);

export default FullyFlowContext;
