import { useState } from 'react';
import styled from 'styled-components';
import { Product } from 'types';
import { PushUpCardKeyFrame } from 'components/shared';
import ProductImage from './components/ProductImage';
import ProductDetail from './components/ProductDetail';

const Card = (product:Product) => {

    const [productDetail] = useState<Product>(product);

    return (
        <Container>
            <ProductImage imgSrc={productDetail?.image_url}/>
            <ProductDetail {...productDetail}/>
        </Container>
    );
}

export default Card;

const Container = styled.div`
    width: 100%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.snow};
    position: relative;
    animation: ${PushUpCardKeyFrame} .8s ease-in-out;
    transition: transform .3s ease-in-out,animation .8s ease-in-out,filter .3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.025);
        filter: drop-shadow(1px 4px 8px rgba(171,171,171,.3));
    }
`;
