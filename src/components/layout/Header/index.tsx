import React from 'react';

import { HeaderBrandingBlock, HeaderContainer } from '@/components/layout/Header/Header.styles';
import LogoIcon from '@/components/ui/Icon/logo-icon';

import appConstants from '@/constants/app-constants';

const Header = () => {
  return <HeaderContainer>
    <HeaderBrandingBlock href="/">
      <LogoIcon width={24} height={24} fill="#2A7CE8" />
      {appConstants.titleEng}
    </HeaderBrandingBlock>
  </HeaderContainer>;
};

export default Header;