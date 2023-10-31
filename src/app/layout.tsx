import React from 'react';
import { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';

import appConfig from '../../app.config';
import '@/styles/reset.css';
import '@/styles/color-schemes.css';

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: appConfig.title,
  description: appConfig.description,
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang='ko'>
      <body className='light' suppressHydrationWarning={true}>
      <script async src='/scripts/theme-switcher.js' />
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
      </body>
      </html>
    </>
  );
}
