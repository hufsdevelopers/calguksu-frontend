import React from 'react';

import Icon from './icon';
import { IconProps } from '@/components/common/icon/icon.types';

const XIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type='fill' {...props}>
    <svg width='29' height='29' viewBox='0 0 29 29' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <rect width='29' height='29' rx='14.5' fill={props.fill} />
      <path d='M10 19.1924L19.1924 10' stroke='white' strokeWidth='3' strokeLinecap='round' />
      <path d='M19 19.1924L9.80761 10' stroke='white' strokeWidth='3' strokeLinecap='round' />
    </svg>
  </Icon>
));

XIcon.displayName = 'XIcon';

export default XIcon;