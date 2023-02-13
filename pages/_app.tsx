import { ChakraProvider } from '@chakra-ui/react';
import { Provider } from 'mobx-react';

import NextNProgress from 'nextjs-progressbar';
import customTheme from '@/config/theme';
import 'pretendard/dist/web/static/pretendard.css';
import '@/styles/satoshi.css';

import type { AppProps } from 'next/app';
import SelectDialogStore from '@/stores/SelectDialogStore';
import PreviewDialogStore from '@/stores/PreviewDialogStore';
import ReportDialogStore from '@/stores/ReportDialogStore';

const selectDialogStore = new SelectDialogStore();
const previewDialogStore = new PreviewDialogStore();
const reportDialogStore = new ReportDialogStore();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextNProgress height={3} color="#F8DF00" options={{ showSpinner: false }} />
      <Provider
        selectDialogStore={selectDialogStore}
        previewDialogStore={previewDialogStore}
        reportDialogStore={reportDialogStore}
      >
        <ChakraProvider resetCSS={true} theme={customTheme}>
          <Component {...pageProps} />
        </ChakraProvider>
      </Provider>
    </>
  );
}
