import React from 'react';
import styled from 'styled-components';

const ProductImage = ({imgSrc}) => {
    return (
        <Container>
            <Image src={imgSrc}/>
        </Container>
    );
}

export default ProductImage;

const Container = styled.div`
    width: 100%;
    height: 196px;
`;

const Image = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Product-Image',
}))`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 15px;
`;
