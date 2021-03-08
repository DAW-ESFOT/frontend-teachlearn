import React from 'react';
import '../styles/globals.css'
import {AuthProvider} from "@/lib/auth";
import Navigation from "@/components/Navigation";
import Head from 'next/head';
import {CssBaseline } from "@material-ui/core";
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>TEACHlearn</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=devide-width"
        />
      </Head>
        <AuthProvider>
          <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navigation />
          <Component {...pageProps} />
          </ThemeProvider>
        </AuthProvider>
    </>
  );
}
export default MyApp
