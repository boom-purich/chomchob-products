import { GetServerSideProps } from 'next';
import HomeModule from 'modules/Home';
import axios from 'axios';

const Home = ({ products }) => {
  return (
    <HomeModule products={products} />
  )

};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const baseUrl = `https://cc-mock-api.herokuapp.com/product`;
  const { data } = await axios.get(baseUrl);
  const products = data ? data : [];
  return {
    props: { products }
  }
}

export default Home;


