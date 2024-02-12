import React from 'react';

import Icon from './icon';
import { IconProps } from '@/components/ui/Icon/icon.types';

const CloseIcon: React.FC<IconProps> = React.memo((props) => (
  <Icon type="stroke" {...props}>
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M21.3337 10.667L10.667 21.3337" stroke={props.stroke} strokeWidth="2" strokeLinecap="square"
            strokeLinejoin="round" />
      <path d="M10.667 10.667L21.3337 21.3337" stroke={props.stroke} strokeWidth="2" strokeLinecap="square"
            strokeLinejoin="round" />
    </svg>

  </Icon>
));

CloseIcon.displayName = 'CloseIcon';

export default CloseIcon;