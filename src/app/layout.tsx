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
    images: [
      {
        url: '/static/assets/preview.png',
        width: 1200,
        height: 630,
        alt: appConstants.title,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: appConstants.title,
    description: appConstants.description,
    images: [
      {
        url: '/static/assets/preview.png',
        alt: appConstants.title,
      },
    ],
    site: '@hufsdevelopers',
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
