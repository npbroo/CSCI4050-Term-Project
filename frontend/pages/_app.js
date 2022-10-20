import '../styles/globals.scss'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {

  return (
    <>
      <Head>
        <title>Term Project</title>
        <meta name="description" content="CSCI 4050" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp