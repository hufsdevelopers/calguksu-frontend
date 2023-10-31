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
