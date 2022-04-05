import type { AppProps } from 'next/app'

import { LayoutBackgroundColorProvider } from '@hooks/useLayoutBackgroundColor'
import CurrentSceneContextProvider from '@hooks/useScrollAnimationEffect/context'

import GlobalStyle from '@styles/global-style'

function JunBride({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <CurrentSceneContextProvider>
        <LayoutBackgroundColorProvider defaultColor="#f5f1e7">
          <Component {...pageProps} />
        </LayoutBackgroundColorProvider>
      </CurrentSceneContextProvider>
    </>
  )
}

export default JunBride
