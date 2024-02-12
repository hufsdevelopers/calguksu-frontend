'use client';
import React, { useState, ReactNode } from 'react';
import FullyFlowContext from '@/components/ui/FullyFlow/FullyFlow.context';

import { ViewportContainer, SectionsContainer } from '@/components/ui/FullyFlow/FullyFlow.styles';

const FullyFlow = ({ children }: { children: ReactNode }) => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const totalSections = React.Children.count(children);

  const moveDown = () => {
    if (currentSectionIndex < totalSections - 1) {
      setCurrentSectionIndex(currentSectionIndex + 1);
    }
  };

  const moveUp = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(currentSectionIndex - 1);
    }
  };

  const moveToTop = () => {
    if (currentSectionIndex > 0) {
      setCurrentSectionIndex(0);
    }
  };

  return (
    <FullyFlowContext.Provider value={{ moveDown, moveUp, moveToTop }}>
      <ViewportContainer>
        <SectionsContainer $currentSectionIndex={currentSectionIndex} $totalSections={totalSections}>
          {children}
        </SectionsContainer>
      </ViewportContainer>
    </FullyFlowContext.Provider>
  );
};

export default FullyFlow;