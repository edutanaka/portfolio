import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import GlobalStyle from '../src/theme/GlobalStyle';
import theme from '../src/theme';

// eslint-disable-next-line react/prop-types
export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans+Condensed&display=swap" rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        { /* eslint-disable-next-line react/jsx-props-no-spreading */ }
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
