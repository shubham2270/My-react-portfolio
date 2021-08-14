import React from "react";

import "../index.css";
import NavBar from "../NavBar";
import { Container, Content } from "../styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Container>
        <NavBar />
        <Content>
          <Component {...pageProps} />
        </Content>
      </Container>
    </>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
