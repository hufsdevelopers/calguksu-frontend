import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'mobx-react';
import SelectDialogStore from '@/stores/SelectDialogStore';
import PreviewDialogStore from '@/stores/PreviewDialogStore';

import NextNProgress from 'nextjs-progressbar';
import customTheme from '@/config/theme';
import 'pretendard/dist/web/static/pretendard.css';
import '@/styles/satoshi.css';

const selectDialogStore = new SelectDialogStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={3} color="#F8DF00" options={{ showSpinner: false }} />
      <Provider selectDialogStore={selectDialogStore} PreviewDialogStore={PreviewDialogStore}>
        <ChakraProvider resetCSS={true} theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}
