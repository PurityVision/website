import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { SessionProvider } from 'next-auth/react'
import { Toaster } from 'react-hot-toast'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SessionProvider>
      <Toaster />
      <Component {...pageProps} />
    </SessionProvider>
  )
}
