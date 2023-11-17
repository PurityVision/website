import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Toaster } from 'react-hot-toast'
import { Inter } from 'next/font/google'
import Head from 'next/head'

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap'
})

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Purity Vision | Filter NSFW Images</title>
      </Head>
      <main className={inter.className}>
        <Toaster />
        <Component {...pageProps} />
      </main>
    </>
  )
}
