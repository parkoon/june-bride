import Document, { Head, Html, Main, NextScript } from 'next/document'

function MyDocument() {
  return (
    <Html>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* eslint-disable-next-line @next/next/no-title-in-document-head */}
        <title>6월의 신부</title>
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
