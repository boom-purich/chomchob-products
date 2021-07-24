import Layout from 'components/layout';
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
