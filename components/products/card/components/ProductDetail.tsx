import { useState } from 'react';
import styled from 'styled-components';
import { Product } from 'types';
import Star from './Star';

const ProductDetail = (product: Product) => {

    const separateMoneyComma = (amount:string) => {
        return amount ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0.00';
    }

    return (
        <Container>
            <IconContainer>
                <Icon src={product?.brand_info?.url} />
            </IconContainer>
            <div>
                <Topic>{product?.name}</Topic>
                <ProductPriceRating>
                    <PriceContainer>
                        <DetailTopic>Price</DetailTopic>
                        <Price>฿{separateMoneyComma(product?.price)}</Price>
                    </PriceContainer>
                    { product?.review?.number > 0 &&
                        <div>
                            <DetailTopic>Reviews ({product?.review?.number} reviews)</DetailTopic>
                            <Star rating={product?.review?.rating}/>
                        </div>
                    }
                </ProductPriceRating>
            </div>
        </Container>
    );
}

export default ProductDetail;

const Container = styled.div`
    display: flex;
    padding: 10px 15px 16px;
`;

const IconContainer = styled.div`
    margin-right: 10px;
`;

const Icon = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Brand-Icon'
}))`
    width: 40px;
    height: 40px;
    border-radius: 10px;
`;

const Topic = styled.div`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.black};
    letter-spacing: .25px;
    height: 40px;
    width: 100%;
    overflow: hidden;
    word-break: break-word;
    text-overflow: ellipsis;
    line-height: 20px;
    margin-bottom: 10px;
`;

const ProductPriceRating = styled.div`
    display: flex;
`;

const PriceContainer = styled.div`
    margin-right: 22px;
`;

const DetailTopic = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.gray};
    white-space: nowrap;
`;

const Price = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: ${({ theme }) => theme.colors.orange};
`;



