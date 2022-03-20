import type { AppProps } from 'next/app'
import Head from 'next/head'
import Image from 'next/image'

import GlobalStyle from '@styles/global-style'

function JunBride({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>6월의 신부</title>
      </Head>
      <GlobalStyle />

      <div style={{ width: 200, height: 300, position: 'relative' }}>
        <Image src="/images/landing.jpg" alt="landing" layout="fill" />
      </div>
      <Component {...pageProps} />
    </>
  )
}

export default JunBride
