import React from 'react';

import { useTheme } from '@/components/common/Theme/Theme.hooks';
import { HeaderBrandingBlock, HeaderContainer, ThemeController } from '@/components/common/Header/Header.styles';

import appConstants from '@/constants/app-constants';
import DayIcon from '@/components/common/icon/day-icon';
import NightIcon from '@/components/common/icon/night-icon';
import LogoIcon from '@/components/common/icon/logo-icon';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return <HeaderContainer>
    <HeaderBrandingBlock>
      <LogoIcon width={24} height={24} fill='#2A7CE8' />
      {appConstants.titleEng}
    </HeaderBrandingBlock>
    <ThemeController onClick={toggleTheme}>
      {theme === 'light' ? <NightIcon width={24} height={24} /> : <DayIcon width={24} height={24} />}
    </ThemeController>
  </HeaderContainer>;
};

export default Header;