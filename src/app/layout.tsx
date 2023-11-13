import React from 'react';
import Head from 'next/head';
import { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';

import '@/styles/reset.css';
import '@/styles/color-schemes.css';
import 'pretendard/dist/web/static/pretendard.css';

import appConstants from '@/constants/app-constants';

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata: Metadata = {
  metadataBase: new URL(appConstants.url),
  title: appConstants.title,
  description: appConstants.description,
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
      <html lang='ko'>
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon?<generated>' type='image/<generated>' sizes='<generated>' />
        <link rel='apple-touch-icon' href='/apple-icon?<generated>' type='image/<generated>' sizes='<generated>' />
      </Head>
      <body className='light' suppressHydrationWarning={true}>
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
      <StyledComponentsRegistry>
        {children}
      </StyledComponentsRegistry>
      </body>
      </html>
    </>
  );
}
