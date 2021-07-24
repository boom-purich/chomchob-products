import { GetServerSideProps } from 'next';
import styled from 'styled-components';
import Products from 'components/products';
import axios from 'axios';

const Home = ({ products }) => {
  return (
    <Container found={products.length > 0}>
      <Content>
        <Amount>Products ({products.length})</Amount>
        <Products products={products} />
      </Content>
    </Container>
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

const Container = styled.div`
    margin-top: 76px;

    @media only screen and (max-width:919px) {
        margin-top:60px;
    }

    ${({ found }) => found ? `
        min-height: 100vh;
    ` : `
        height: calc(100vh - 130px);

        @media only screen and (max-width:919px) {
            height: calc(100vh - 114px);
        }
    `}
`;

const Content = styled.div`
    max-width: 1206px;
    width: auto;
    margin: 0 auto;
    padding: 50px 20px;

    @media only screen and (max-width:919px) {
        padding: 36px 20px;
    }
`;

const Amount = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    padding-bottom: 20px;
`;


