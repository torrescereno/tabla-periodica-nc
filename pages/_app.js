import '../styles/globals.css'
import Layout from '../components/layout'
import Head from 'next/head'

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Tabla periódica de la nueva constitución</title>
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
