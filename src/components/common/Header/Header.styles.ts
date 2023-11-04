import styled from 'styled-components';
import { media } from '@/styles/ui.styles';

export const HeaderContainer = styled.header`
  align-items: center;
  display: flex;
  height: 78px;
  justify-content: space-between;
  padding: 0 44px;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1024;

  ${media.laptop`
   height: 94px;
   border-bottom: 1px solid transparent;
  `}
`;

export const HeaderBrandingBlock = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: center;
  font-size: 17px;
  color: var(--calguksu-main-text);
  font-weight: 600;
`;

export const ThemeController = styled.button`
  align-items: center;
  display: flex;
  height: 36px;
  width: 36px;
  justify-content: center;
`;