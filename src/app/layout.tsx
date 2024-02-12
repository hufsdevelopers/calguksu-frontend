import React from 'react';
import { Metadata } from 'next';

import AppRecoilStyledWrapper from '@/states/AppRecoilStyledWrapper';
import AppModalProvider from '@/states/AppModalProvider';

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
    icon: '/static/branding/favicon.ico',
    apple: '/static/branding/apple-icon.png',
    shortcut: '/static/branding/icon.png',
  },
  openGraph: {
    title: appConstants.title,
    description: appConstants.description,
    url: appConstants.url,
    siteName: appConstants.titleEng,
    locale: appConstants.locale,
    type: 'website',
    images: ['/static/branding/preview.png'],
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
      <body suppressHydrationWarning={true}>
      <script dangerouslySetInnerHTML={{
        __html: `(function() {
                    let preferredTheme;
                    window.__onThemeChange = function setTheme(newTheme) {
                      window.__theme = newTheme;
                      preferredTheme = newTheme;
                      document.body.className = newTheme;
                    };
                  
                    try {
                      preferredTheme = localStorage.getItem('theme');
                    } catch (err) {
                    }
                  
                    window.__setPreferredTheme = function(newTheme) {
                      window.__onThemeChange(newTheme);
                      try {
                        localStorage.setItem('theme', newTheme);
                      } catch (err) {
                      }
                    };
                  
                    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                    darkQuery.addListener(function(e) {
                      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
                    });
                  
                    window.__onThemeChange(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
                    })();
                  `,
      }} />
      <AppRecoilStyledWrapper>
        <AppModalProvider>
          {children}
        </AppModalProvider>
      </AppRecoilStyledWrapper>
      </body>
      </html>
    </>
  );
}
