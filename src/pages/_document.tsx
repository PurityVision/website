import { Html, Head, Main, NextScript } from 'next/document'

export default function Document (): JSX.Element {
  return (
    <Html lang='en'>
      <Head>
        <title>Purity Vision</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
