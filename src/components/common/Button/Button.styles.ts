import styled from 'styled-components';

export const ButtonBlock = styled.button<{ $width: string }>`
  align-items: center;
  border-radius: 7px;
  color: ${props => (props['aria-invalid'] === true ? 'var(--calguksu-colors-gray-700)' : 'var(--calguksu-colors-white)')};
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

  &:hover {
    background-color: ${props => (props['aria-invalid'] === true ? 'var(--calguksu-colors-blue-invalid)' : 'var(--calguksu-colors-blue-hover)')};
    color: ${props => (props['aria-invalid'] === true ? 'var(--calguksu-colors-gray-700)' : 'var(--calguksu-colors-blue-hover-text)')};
  }
`;
