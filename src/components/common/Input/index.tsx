import React from 'react';
import { InputBlock, InputContainer, InputLabel } from '@/components/common/Input/Input.styles';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  invalid: boolean;
}

const Input: React.FC<InputProps> = ({ label, invalid, ...props }) => {
  return (<InputContainer $invalid={invalid}>
    <InputBlock required {...props} />
    <InputLabel $invalid={invalid}>{label}</InputLabel>
  </InputContainer>);
};

export default Input;