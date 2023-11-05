'use client';
import React from 'react';
import Head from 'next/head';
import StyledComponentsRegistry from '@/lib/registry';
import useScreenSize from '@/hooks/useScreenSize';
import CalguksuProvider from '@/context/CalguksuProvider';

import '@/styles/reset.css';
import '@/styles/color-schemes.css';
import 'pretendard/dist/web/static/pretendard.css';

type RootLayoutProps = {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  useScreenSize();

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
        <CalguksuProvider>
          {children}
        </CalguksuProvider>
      </StyledComponentsRegistry>
      </body>
      </html>
    </>
  );
}
