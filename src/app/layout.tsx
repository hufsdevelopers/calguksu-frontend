import React from 'react';
import { Metadata } from 'next';
import StyledComponentsRegistry from '@/lib/registry';

import appConfig from '../config/app.config';
import '@/styles/reset.css';
import '@/styles/color-schemes.css';
import 'pretendard/dist/web/static/pretendard.css';
import Head from 'next/head';

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
      <Head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
        <link rel='icon' href='/icon?<generated>' type='image/<generated>' sizes='<generated>' />
        <link rel='apple-touch-icon' href='/apple-icon?<generated>' type='image/<generated>' sizes='<generated>' />
      </Head>
      <body className='light' suppressHydrationWarning={true}>
      <script dangerouslySetInnerHTML={{
        __html: `(function() {
                    let preferredTheme;
                    window.__onThemeChange = function() {
                    };
                  
                    function setTheme(newTheme) {
                      window.__theme = newTheme;
                      preferredTheme = newTheme;
                      document.body.className = newTheme;
                      window.__onThemeChange(newTheme);
                    }
                  
                    try {
                      preferredTheme = localStorage.getItem('theme');
                    } catch (err) {
                    }
                  
                    window.__setPreferredTheme = function(newTheme) {
                      setTheme(newTheme);
                      try {
                        localStorage.setItem('theme', newTheme);
                      } catch (err) {
                      }
                    };
                  
                    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
                    darkQuery.addListener(function(e) {
                      window.__setPreferredTheme(e.matches ? 'dark' : 'light');
                    });
                  
                    setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light'));
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
