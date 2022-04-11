import { Head, Html, Main, NextScript } from 'next/document'

function MyDocument() {
  return (
    <Html lang="ko-KR">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <meta charSet="utf-8" />
        <meta name="robots" content="all" />
        <meta
          property="og:title"
          content="🤵 박종혁 ♥️  👰🏻 김진아 결혼합니다"
        />
        <meta
          property="og:description"
          content="6월 18일 토요일 오후 12시 30분 강동 루벨"
        />
        <meta property="og:image" content="/images/wedding.png" />
        <meta property="og:url" content="https://junebride.kr" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="ko_KR" />
        <meta property="twitter:card" content="summary" />
        <meta property="twitter:url" content="https://junebride.kr" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>6월의 신부</title>
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <div id="bottom-sheet" />
      </body>
    </Html>
  )
}

export default MyDocument
