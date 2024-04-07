import React from 'react';
import { Metadata } from 'next';
import RecoilStyledProvider from '@/states/RecoilStyledProvider';

import '@/styles/reset.css';
import '@/styles/color-schemes.css';
import 'pretendard/dist/web/static/pretendard.css';

import appConstants from '@/constants/app-constants';

interface RootLayoutProps {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  metadataBase: new URL(appConstants.url),
  title: appConstants.title,
  description: appConstants.description,
  icons: {
    icon: '/static/logos/favicon.ico',
    apple: '/static/logos/apple-icon.png',
    shortcut: '/static/logos/icon.png',
  },
  openGraph: {
    title: appConstants.title,
    description: appConstants.description,
    url: appConstants.url,
    siteName: appConstants.titleEng,
    locale: appConstants.locale,
    type: 'website',
  },
  robots: {
    index: true,
    follow: false,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="ko">
        <body className="dark" suppressHydrationWarning={true}>
          <RecoilStyledProvider>{children}</RecoilStyledProvider>
        </body>
      </html>
    </>
  );
}
