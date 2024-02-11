import React from 'react';
import { InputBlock, InputContainer, InputLabel } from '@/components/common/Input/Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalid: boolean;
  backgroundColor?: string;
}

const Input: React.FC<InputProps> = ({ label, invalid, backgroundColor = 'transparent', ...props }) => {
  return (<InputContainer $invalid={invalid} style={{ backgroundColor: backgroundColor }}>
    <InputBlock required {...props} />
    <InputLabel $invalid={invalid}>{label}</InputLabel>
  </InputContainer>);
};

export default Input;