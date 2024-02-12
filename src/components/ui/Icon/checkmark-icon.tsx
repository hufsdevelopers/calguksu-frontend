import React from 'react';
import styled, { css, keyframes } from 'styled-components';
import { IconProps } from '@/components/ui/Icon/icon.types';
import Icon from '@/components/ui/Icon/icon';

interface CheckmarkIconProps extends IconProps {
  checked: boolean;
}

const checkmarkAnimation = keyframes`
  from {
    transform: scale(0);
  }
  to {
    transform: scale(1);
  }
`;

const AnimatedIcon = styled(Icon)<CheckmarkIconProps>`
  svg {
    animation: ${props => props.checked ? css`${checkmarkAnimation} 200ms ease` : 'none'};
  }
`;

const CheckmarkIcon: React.FC<CheckmarkIconProps> = ({ checked, ...props }) => (
  <AnimatedIcon type='stroke' {...props} checked={checked}>
    <svg xmlns='http://www.w3.org/2000/svg' width='16' height='17' viewBox='0 0 16 17' fill='none'>
      <path d='M12 5.83325L6.5 11.1666L4 8.74234' stroke={props.stroke} strokeWidth='1.5' strokeLinecap='round'
            strokeLinejoin='round' />
    </svg>
  </AnimatedIcon>
);

export default CheckmarkIcon;
