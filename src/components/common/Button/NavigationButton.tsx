import { NavigationButtonBlock } from '@/components/common/Button/Button.styles';
import React from 'react';

interface NavigationButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ children, ...props }) => {
  return <NavigationButtonBlock {...props}>{children}</NavigationButtonBlock>;
};

export default NavigationButton;