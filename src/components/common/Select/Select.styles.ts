import styled from 'styled-components';

export const Dropdown = styled.div<{ $isOpen: boolean }>`
  display: ${props => (props.$isOpen ? 'block' : 'none')};
  width: 100%;
  z-index: 12;
`;

export const OptionContainer = styled.div<{ $hover: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  color: var(--calguksu-main-text);
  height: 63px;
  font-size: 16px;
  font-weight: 500;
  margin: 4px 8px;
  padding: 0 11px;
  gap: 12px;
  transition: background-color 300ms ease;

  &:hover {
    border-radius: 8px;
    background-color: ${({ $hover }) => $hover ? 'var(--calguksu-select-background-hover-color)' : 'transparent'};
  }
`;

export const Placeholder = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  cursor: pointer;
  width: 100%;
  color: var(--calguksu-main-text);
  font-size: 16px;
  font-weight: 500;
  padding: 0 24px 0 0;

  & span {
    padding: 0 24px;
    color: var(--calguksu-select-none-select);
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 393px;
  border-radius: 6px;
  background-color: var(--calguksu-select-background-color);
  border: 1px solid var(--calguksu-select-border);
`;

export const OptionCalendarIcon = styled.img`
  width: 26px;
  height: 26px;
`;

export const OptionCalendarInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;

  & h3 {
    color: var(--calguksu-main-text);
    font-size: 16px;
    font-weight: 500;
  }

  & p {
    color: var(--calguksu-colors-gray-400);
    font-size: 11px;
  }
`;