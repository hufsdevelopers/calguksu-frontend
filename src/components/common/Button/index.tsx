import React from 'react';
import { ButtonBlock } from '@/components/common/Button/Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
}

const Button: React.FC<ButtonProps> = ({ children, width = 'fit-content', ...props }) => {
  return <ButtonBlock $width={width} {...props}>{children}</ButtonBlock>;
};

export default Button;