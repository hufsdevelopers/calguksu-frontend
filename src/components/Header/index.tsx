import React from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/states/themeState';

import DayIcon from '@/components/common/icon/day-icon';
import NightIcon from '@/components/common/icon/night-icon';
import LogoIcon from '@/components/common/icon/logo-icon';
import { HeaderBrandingBlock, HeaderContainer, ThemeController } from '@/components/Header/Header.styles';

import appConstants from '@/constants/app-constants';

const Header = () => {
  const [theme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    window.__onThemeChange(newTheme);
  };

  return <HeaderContainer>
    <HeaderBrandingBlock href="/">
      <LogoIcon width={24} height={24} fill="#2A7CE8" />
      {appConstants.titleEng}
    </HeaderBrandingBlock>
    <ThemeController onClick={toggleTheme}>
      {theme === 'light' ? <NightIcon width={24} height={24} /> : <DayIcon width={24} height={24} />}
    </ThemeController>
  </HeaderContainer>;
};

export default Header;