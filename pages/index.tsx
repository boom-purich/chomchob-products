import { GetServerSideProps } from 'next';
import { MainPageContainerStyled, MainPageContentStyled, ProductAmountStyled } from 'styles/MainPage';
import ProductListComponent from 'components/ProductList';
import axios from 'axios';

const Home = ({ products }) => {
  return (
    <MainPageContainerStyled found={products.length > 0}>
      <MainPageContentStyled>
        <ProductAmountStyled>Products ({products.length})</ProductAmountStyled>
        <ProductListComponent products={products}></ProductListComponent>
      </MainPageContentStyled>
    </MainPageContainerStyled>
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
