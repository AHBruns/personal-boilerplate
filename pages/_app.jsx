import React from "react";
import App from "next/app";
import Head from "next/head";
import CssBaseline from "@material-ui/core/CssBaseline";
import { RootProvider } from "../providers/RootProvider";
import { makePageTitle } from "../utils/helpers";

export default class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>
            {makePageTitle(
              "You're absolute idiot! You forgot to set the page title for this page! Do you even know what a for loop is?!?!"
            )}
          </title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <RootProvider>
          <CssBaseline />
          <Component {...pageProps} />
        </RootProvider>
      </>
    );
  }
}
