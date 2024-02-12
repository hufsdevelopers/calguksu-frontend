import React from 'react';
import { ButtonBlock } from '@/components/common/Button/Button.styles';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  width?: string;
}

const Button = ({ children, width = 'fit-content', ...props }: ButtonProps) => {
  return <ButtonBlock $width={width} {...props}>{children}</ButtonBlock>;
};

export default Button;