import styled from 'styled-components';

export const ButtonBlock = styled.button<{ $width: string }>`
  align-items: center;
  background-color: var(--calguksu-colors-blue-normal);
  border-radius: 7px;
  color: var(--calguksu-colors-white);
  display: flex;
  font-size: 15px;
  font-weight: 600;
  gap: 9px;
  justify-content: center;
  max-width: 393px;
  padding: 12px 13px;
  transition: all 200ms ease;
  width: ${({ $width }) => $width};

  &:hover {
    background-color: var(--calguksu-colors-blue-hover);
    color: var(--calguksu-colors-blue-hover-text);
  }
`;