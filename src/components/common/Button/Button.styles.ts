import styled from 'styled-components';

export const ButtonBlock = styled.button<{ $width: string }>`
  align-items: center;
  border-radius: 7px;
  color: ${props => (props['aria-invalid'] === true ? 'var(--calguksu-colors-blue-invalid-text)' : 'var(--calguksu-colors-white)')};
  display: flex;
  font-size: 15px;
  font-weight: 600;
  gap: 9px;
  justify-content: center;
  max-width: 393px;
  padding: 12px 13px;
  transition: all 200ms ease;
  width: ${({ $width }) => $width};
  background-color: ${props => (props['aria-invalid'] === true ? 'var(--calguksu-colors-blue-invalid)' : 'var(--calguksu-colors-blue-normal)')};
  user-select: none;

  &:hover {
    background-color: ${props => (props['aria-invalid'] === true ? 'var(--calguksu-colors-blue-invalid)' : 'var(--calguksu-colors-blue-hover)')};
    color: ${props => (props['aria-invalid'] === true ? 'var(--calguksu-colors-blue-invalid-text)' : 'var(--calguksu-colors-blue-hover-text)')};
  }
`;

export const NavigationButtonBlock = styled.button`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  border-radius: 7px;
  user-select: none;
  background-color: var(--calguksu-button-navigation-background-color);
  color: var(--calguksu-button-navigation-text-color)
`;