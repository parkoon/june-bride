import type { AppProps } from 'next/app'

import CurrentSceneContextProvider from '@hooks/useScrollAnimationEffect/context'

import GlobalStyle from '@styles/global-style'

function JunBride({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CurrentSceneContextProvider>
        <Component {...pageProps} />
      </CurrentSceneContextProvider>
    </>
  )
}

export default JunBride
