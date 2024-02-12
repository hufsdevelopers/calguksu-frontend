import React from 'react';
import {
  CheckboxContainer, CheckboxLabel, HiddenCheckbox, StyledCheckbox,
} from '@/components/common/Checkbox/Checkbox.styles';
import CheckmarkIcon from '@/components/ui/Icon/checkmark-icon';

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  checked: boolean;
  onClick: () => void;
  markColor: string;
  label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ className, checked, onClick, markColor, label, ...props }) => (
  <CheckboxContainer className={className}>
    <HiddenCheckbox checked={checked} onChange={() => undefined} {...props} />
    <StyledCheckbox checked={checked} onClick={onClick}>
      <CheckmarkIcon width={13} height={13} checked={checked} stroke={markColor} />
    </StyledCheckbox>
    {label && <CheckboxLabel onClick={onClick}>{label}</CheckboxLabel>}
  </CheckboxContainer>
);

export default Checkbox;
