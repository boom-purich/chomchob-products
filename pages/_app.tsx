import Layout from 'components/Layout';
import Meta from 'components/Meta';
import 'styles/global.css';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Meta/>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
