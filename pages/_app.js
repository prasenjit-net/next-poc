import '../styles/globals.css'
import { Provider } from 'next-auth/client'
import Navbar from './components/Navbar'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <Head>
        <title>My App</title>
      </Head>
      <div className="containerBody">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </Provider>
  )
}

export default MyApp
