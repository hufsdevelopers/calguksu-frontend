import React, { ReactNode, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { themeState } from '@/states/themeState';

import DayIcon from '@/components/ui/Icon/day-icon';
import NightIcon from '@/components/ui/Icon/night-icon';
import LogoIcon from '@/components/ui/Icon/logo-icon';
import { HeaderBrandingBlock, HeaderContainer, ThemeController } from '@/components/layout/Header/Header.styles';

import appConstants from '@/constants/app-constants';

const Header = () => {
  const [theme, setTheme] = useRecoilState(themeState);
  const [themeIcon, setThemeIcon] = useState<ReactNode>(undefined);

  useEffect(() => {
    if (theme === 'light') setThemeIcon(<DayIcon width={24} height={24} />);
    else if (theme === 'dark') setThemeIcon(<NightIcon width={24} height={24} />);
    else setThemeIcon(undefined);
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    window.__onThemeChange(newTheme);
  };

  return <HeaderContainer>
    <HeaderBrandingBlock href="/">
      <LogoIcon width={24} height={24} fill="#2A7CE8" />
      {appConstants.titleEng}
    </HeaderBrandingBlock>
    <ThemeController onClick={toggleTheme}>{themeIcon}</ThemeController>
  </HeaderContainer>;
};

export default Header;