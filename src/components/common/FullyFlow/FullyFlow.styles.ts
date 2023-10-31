import styled from 'styled-components';

export const ViewportContainer = styled.div`
  height: calc(var(--vh, 1vh) * 100);
  overflow: hidden;
  position: relative;
`;

export const SectionsContainer = styled.div<{
  $currentSectionIndex: number;
  $totalSections: number;
}>`
  position: relative;
  top: ${({ $currentSectionIndex }) => `calc(var(--vh, 1vh) * ${$currentSectionIndex * -100})`};
  transition: ${({ $currentSectionIndex, $totalSections }) =>
          $currentSectionIndex === $totalSections - 1
                  ? 'top 800ms cubic-bezier(0.700, -0.180, 0.230, 1.185)'
                  : 'top 600ms ease-in-out'
  };
  width: 100%;
`;

export const FullyFlowSection = styled.div`
  position: relative;
  height: calc(var(--vh, 1vh) * 100);
`;