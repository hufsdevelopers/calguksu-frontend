'use client';
import React, { ReactElement, ReactNode, useState } from 'react';
import { RecoilRoot } from 'recoil';
import { useServerInsertedHTML } from 'next/navigation';
import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export default function AppRecoilStyledWrapper({ children }: { children: ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();
    styledComponentsStyleSheet.instance.clearTag();
    return <>{styles}</>;
  });

  const renderContent = (): ReactElement => {

    if (typeof window !== 'undefined') {
      return <>{children}</>;
    }

    return (
      <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
        {children}
      </StyleSheetManager>
    );
  };

  return (
    <RecoilRoot>
      {renderContent()}
    </RecoilRoot>
  );
}