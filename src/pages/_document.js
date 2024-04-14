import React from "react";
import { ServerStyleSheet } from "styled-components";

import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charset='utf-8' />
          {/* <meta name='viewport' content='width=device-width, initial-scale=1' /> */}
          <meta name='theme-color' content='#000000' />
          <link
            href='https://fonts.googleapis.com/css2?family=Jost:wght@600&family=Roboto:wght@300&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=VT323&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap'
            rel='stylesheet'
          />
          <meta
            name='description'
            content='Web site created using create-react-app'
          />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='application-name' content="Shubham's portfolio" />
          <meta
            name='apple-mobile-web-app-title'
            content="Shubham's portfolio"
          />
          <meta name='theme-color' content='#65dc98' />
          <meta name='msapplication-navbutton-color' content='#65dc98' />
          <meta
            name='apple-mobile-web-app-status-bar-style'
            content='black-translucent'
          />
          <meta name='msapplication-starturl' content='/' />
          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, shrink-to-fit=no'
          />

          <link
            rel='icon'
            type='image/png'
            sizes='512x512'
            href='/android-launchericon-512-512.png'
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='512x512'
            href='/android-launchericon-512-512.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='192x192'
            href='/android-launchericon-192-192.png'
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='192x192'
            href='/android-launchericon-192-192.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='144x144'
            href='/android-launchericon-144-144.png'
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='144x144'
            href='/android-launchericon-144-144.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='96x96'
            href='/android-launchericon-96-96.png'
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='96x96'
            href='/android-launchericon-96-96.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='72x72'
            href='/android-launchericon-72-72.png'
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='72x72'
            href='/android-launchericon-72-72.png'
          />
          <link
            rel='icon'
            type='image/png'
            sizes='48x48'
            href='/android-launchericon-48-48.png'
          />
          <link
            rel='apple-touch-icon'
            type='image/png'
            sizes='48x48'
            href='/android-launchericon-48-48.png'
          />

          <link
            href='https://fonts.googleapis.com/css2?family=Jost:wght@600&family=Roboto:wght@300&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=VT323&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@700&display=swap'
            rel='stylesheet'
          />
          <script src='https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js'></script>
          <meta
            name='description'
            content='Web site created using create-react-app'
          />
          <link rel='apple-touch-icon' href='/logo192.png' />
          {/* <!--
      manifest.json provides metadata used when your web app is installed on a
      user's mobile device or desktop. See https://developers.google.com/web/fundamentals/web-app-manifest/
    --> */}
          <link rel='manifest' href='/manifest.json' />
          {/* <style>
      .loader--hide {
        opacity: 0;
        display: none !important;
      }

      body {
        padding: 0px;
        margin: 0px;
        width: 100%;
        height: 100%;
      }
      body,
      html {
        height: 100%;
        background: #222035;
      }
      .background {
        background-color: #222035;
        position: absolute;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      .loader {
        display: inline-block;
        width: 80px;
        height: 80px;
      }
      .loader:after {
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #65dc98;
        border-color: #65dc98 transparent #65dc98 transparent;
        animation: lds-dual-ring 1.2s linear infinite;
      }
      @keyframes lds-dual-ring {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    </style> */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
