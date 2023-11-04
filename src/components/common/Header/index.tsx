import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/hooks/useTheme';

import { HeaderBrandingBlock, HeaderContainer, ThemeController } from '@/components/common/Header/Header.styles';

import appConfig from '@/config/app.config';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  return <HeaderContainer>
    <HeaderBrandingBlock>
      <Image src='/icon/ico-logo.svg' width={24} height={24} alt='logo' />
      {appConfig.titleEng}
    </HeaderBrandingBlock>
    <ThemeController onClick={toggleTheme}>
      {theme === 'light'
        ? <Image src='/icon/ico-night.svg' width={24} height={24} alt='day' />
        : <Image src='/icon/ico-day.svg' width={24} height={24} alt='day' />}
    </ThemeController>
  </HeaderContainer>;
};

export default Header;