import { useState } from 'react';
import styled from 'styled-components';
import { Product } from 'types';
import { NoneScrollStyle } from 'components/shared';
import Card from './card';
import ProductNotFound from './ProductNotFound';

const Products = ({ products }) => {

    const [productList] = useState<Array<Product>>(products);

    return (
        <Container found={productList.length > 0}>
            {productList && productList.length > 0 ? productList.map((list, index) => (
                <Card key={`product-card-${index + 1}`} {...list} />
            )) :
                <>
                    <NoneScrollStyle />
                    <ProductNotFound />
                </>
            }
        </Container>
    );
}

export default Products;

const Container = styled.div`
    display: grid;
    grid-column-gap: 22px;
    grid-row-gap: 25px;

    ${({ found }) => found ? `
        grid-template-columns : repeat(auto-fill,minmax(275px,1fr));
    ` : `
        place-items:center;
    `};
`;
