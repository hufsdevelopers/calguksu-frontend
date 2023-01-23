import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'mobx-react';
import DialogStore from '@/stores/dialogStore';

import NextNProgress from 'nextjs-progressbar';
import customTheme from '@/config/theme';
import 'pretendard/dist/web/static/pretendard-dynamic-subset.css';
import '@/styles/satoshi.css';

const dialogStore = new DialogStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={3} color="RGBA(0, 0, 0, 0.64)" options={{ showSpinner: false }} />
      <ChakraProvider resetCSS={true} theme={customTheme}>
        <Provider dialogStore={dialogStore}>
          <Component {...pageProps} />
        </Provider>
      </ChakraProvider>
    </>
  );
}
