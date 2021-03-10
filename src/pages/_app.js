import React from 'react';
import '../styles/globals.css'
import {AuthProvider} from "@/lib/auth";
import Navigation from "@/components/Navigation";
import Head from 'next/head';
//import { ThemeProvider } from '@material-ui/core/styles';
import { Container, CssBaseline, Grid, ThemeProvider } from "@material-ui/core";
import theme from "@/styles/theme"
//import theme from '../styles/theme';

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

            <Container maxWidth="lg">
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Component {...pageProps} />
                </Grid>
              </Grid>
            </Container>
          </ThemeProvider>
        </AuthProvider>
    </>
  );
}
export default MyApp
