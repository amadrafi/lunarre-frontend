import Head from "next/head";
import Navbar from '../components/navbar'
import '../styles/globals.css'
import '../styles/gridMenu.css'
import Footer from '../components/footer'
import useWindowSize from "../shared/windowSizeFunction";

function MyApp({ Component, pageProps }) {
  const { width,height } = useWindowSize();
  const isMobile = width<857;
  return (
    <>
      <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Lunarre by Walking Drums</title>
      </Head>
      <Navbar winSize={{width:width,height:height}} isMobile={isMobile} />
      <Component winSize={{width:width,height:height}} isMobile={isMobile} {...pageProps} />
      <Footer winSize={{width:width,height:height}} isMobile={isMobile}/>
    </>
  )
}

export default MyApp
