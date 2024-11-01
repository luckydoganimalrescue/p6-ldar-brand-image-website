import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="CV" />
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="stylesheet" href="/styles.css" /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
