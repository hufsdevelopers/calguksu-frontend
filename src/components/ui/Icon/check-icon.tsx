import React from 'react';

import Icon from './icon';
import { IconProps } from '@/components/ui/Icon/icon.types';

const CheckIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type='fill' {...props}>
    <svg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='29' height='29' rx='14.5' fill={props.fill} />
      <path d='M20 11L12.4375 19L9 15.3636' stroke='white' strokeWidth='3' strokeLinecap='round'
            strokeLinejoin='round' />
    </svg>
  </Icon>
));

CheckIcon.displayName = 'CheckIcon';

export default CheckIcon;