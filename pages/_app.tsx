import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'mobx-react';

import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import customTheme from '@/config/theme';
import 'pretendard/dist/web/static/pretendard.css';

import DialogStore from '@/stores/DialogStore';
const dialogStore = new DialogStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={3} color="#F8DF00" options={{ showSpinner: false }} />
      <Provider dialogStore={dialogStore}>
        <ChakraProvider resetCSS={true} theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}
