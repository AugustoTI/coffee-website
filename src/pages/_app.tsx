import type { AppProps } from 'next/app'
import { Layout } from '../Layout'
import { GlobalStyles } from '../styles/global'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </>
  )
}

export default MyApp
