import Meta from 'components/Meta';
import Layout from 'components/layout';
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
