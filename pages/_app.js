import Head from 'next/head'
import React from 'react'
import "./_global.scss"
import { analytics } from '../util/firebase';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }) {
  const routers = useRouter();

  React.useEffect(() => {
    // if (process.env.NODE_ENV === 'production') {
      const logEvent = (url) => {
        analytics().setCurrentScreen(url);
        analytics().logEvent('screen_view');
      };

      routers.events.on('routeChangeComplete', logEvent);
      logEvent(window.location.pathname);

      return () => {
        routers.events.off('routeChangeComplete', logEvent);
      };
    // }
  }, []);

  return <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />

      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Ubuntu" />
      <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@700&display=swap" rel="stylesheet" />
    </Head>

    <Component {...pageProps} />
  </div>
}

export default MyApp
