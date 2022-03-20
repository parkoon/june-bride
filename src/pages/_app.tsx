import type { AppProps } from 'next/app'
import Head from 'next/head'

import CurrentSceneContextProvider from '@hooks/useScrollAnimationEffect/context'

import GlobalStyle from '@styles/global-style'

function JunBride({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>6월의 신부</title>
      </Head>
      <GlobalStyle />
      <CurrentSceneContextProvider>
        <Component {...pageProps} />
      </CurrentSceneContextProvider>
    </>
  )
}

export default JunBride
