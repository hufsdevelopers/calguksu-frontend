import React from 'react';
import { FullyFlowSection as StyledFullyFlowSection } from '@/components/full-page/FullyFlow.styles';

interface SectionProps {
  children: React.ReactNode;
}

const FullyFlowSection: React.FC<SectionProps> = ({ children }) => {
  return <StyledFullyFlowSection>{children}</StyledFullyFlowSection>;
};

export default FullyFlowSection;