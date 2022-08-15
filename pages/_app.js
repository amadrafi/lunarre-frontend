import Head from "next/head";
import Navbar from '../components/navbar'
import '../styles/globals.css'
import '../styles/gridMenu.css'
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Lunarre by Walking Drums</title>
      </Head>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
