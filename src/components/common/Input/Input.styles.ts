import styled from 'styled-components';

export const InputContainer = styled.div<{ $invalid: boolean }>`
  position: relative;
  width: 100%;
  max-width: 393px;
  height: 70px;
  border-radius: 6px;
  background-color: var(--calguksu-box-background-color);
  border: 1px solid var(--calguksu-box-border);
  border-color: ${props => props.$invalid ? 'var(--calguksu-colors-error)' : 'var(--calguksu-box-border)'};
`;

export const InputBlock = styled.input`
  font-size: 16px;
  font-weight: 500;
  width: 100%;
  position: relative;
  color: var(--calguksu-main-text);
  height: 100%;
  background: none;
  outline: none;
  border: none;
  padding: 16px 26px 0 26px;
  z-index: 2;

  &:focus ~ label, &:valid ~ label {
    font-size: 12px;
    bottom: 42px;
  }
`;

export const InputLabel = styled.label<{ $invalid: boolean }>`
  position: absolute;
  color: ${props => props.$invalid ? 'var(--calguksu-colors-error)' : 'var(--calguksu-box-none-select)'};
  left: 26px;
  font-size: 16px;
  font-weight: 500;
  bottom: 23px;
  transition: all 200ms ease;
  user-select: none;
`;