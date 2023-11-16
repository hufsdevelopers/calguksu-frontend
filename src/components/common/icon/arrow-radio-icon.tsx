import React from 'react';

import Icon from './icon';
import { IconProps } from '@/components/common/icon/icon.types';

const ArrowRadioIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type='fill' {...props}>
    <svg width='11' height='8' viewBox='0 0 11 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <g id='radio open'>
        <path id='Polygon 1' d='M5 7L0.669872 1.75L9.33013 1.75L5 7Z' fill={props.fill} />
      </g>
    </svg>
  </Icon>
));
ArrowRadioIcon.displayName = 'ArrowRadioIcon';

export const ArrowDownRadioIcon: React.FC<IconProps> = React.memo((props) => (
  <ArrowRadioIcon style={{ transform: 'rotate(0deg)' }} {...props} />
));
ArrowDownRadioIcon.displayName = 'ArrowDownRadioIcon';

export const ArrowUpRadioIcon: React.FC<IconProps> = React.memo((props) => (
  <ArrowRadioIcon style={{ transform: 'rotate(180deg)' }} {...props} />
));
ArrowUpRadioIcon.displayName = 'ArrowUpRadioIcon';

