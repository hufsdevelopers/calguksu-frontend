import styled from 'styled-components';

export const ToastWrapper = styled.div<{ $isVisible: boolean }>`
  align-items: center;
  background-color: var(--calguksu-colors-primary-300);
  border-radius: 8px;
  color: var(--calguksu-colors-white);
  display: flex;
  font-size: 16px;
  font-weight: 600;
  gap: 16px;
  padding: 23px 30px;
  position: fixed;
  right: ${props => (props.$isVisible ? '20px' : '-300px')};
  top: 30%;
  width: 275px;
  height: 70px;
  transition: right 0.5s ease;
  z-index: 2048;
`;