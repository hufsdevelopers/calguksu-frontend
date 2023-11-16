import styled, { keyframes } from 'styled-components';

export const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxLabel = styled.label`
  margin-left: 8px;
  font-size: 12px;
  cursor: pointer;
  user-select: none;
  color: var(--calguksu-main-text);
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;

export const StyledCheckbox = styled.div<{ checked: boolean }>`
  align-items: center;
  background: ${props => props.checked ? 'var(--calguksu-checkbox-select)' : 'var(--calguksu-checkbox-none-select)'};
  border-radius: 2px;
  display: inline-flex;
  height: 13px;
  justify-content: center;
  position: relative;
  transition: all 150ms ease;
  width: 13px;
  cursor: pointer;

  ${HiddenCheckbox}:checked + & {
    background: var(--calguksu-checkbox-select);
  }
`;

export const checkmarkAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;