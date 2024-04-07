import React from 'react';

import LogoIcon from '@/components/common/icon/logo-icon';
import { HeaderBrandingBlock, HeaderContainer } from '@/components/Header/Header.styles';

import appConstants from '@/constants/app-constants';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderBrandingBlock href="/">
        <LogoIcon width={24} height={24} fill="#2A7CE8" />
        {appConstants.titleEng}
      </HeaderBrandingBlock>
    </HeaderContainer>
  );
};

export default Header;
