import styled,{keyframes} from 'styled-components';

export const pushUp = keyframes`
    0% {
        opacity: 0;
        top: calc(20%);
    }

    100% {
        opacity: 1;
        top: 0;
    }
`;

export const ProductCardContainerStyled = styled.div`
    width: 100%;
    border-radius: 15px;
    background-color: ${({ theme }) => theme.colors.snow};
    position: relative;
    animation: ${pushUp} .8s ease-in-out;
    transition: transform .3s ease-in-out,animation .8s ease-in-out,filter .3s ease-in-out;
    cursor: pointer;

    &:hover {
        transform: scale(1.025);
        filter: drop-shadow(1px 4px 8px rgba(171,171,171,.3));
    }
    
`;

export const ProductImageContainerStyled = styled.div`
    width: 100%;
    height: 196px;
`;

export const ImageStyled = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Product-Image',
}))`
    ${({ type }) => type === 'product' ? `
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: 15px;
    ` : `
    width: 40px;
    height: 40px;
    border-radius: 10px;
    `}
    
`;

export const ProductDetailContainerStyled = styled.div`
    padding: 10px 15px 16px;
    display: flex;
    
`;

export const BrandIconStyled = styled.div`
    margin-right: 10px;
`;

export const BrandIcon = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Brand-Image'
}))`
    width: 40px;
    height: 40px;
    border-radius: 10px;
`;

export const ProductDetailContentStyled = styled.div`

`;

export const ProductDetailTopicStyled = styled.div`
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

export const ProductPriceRatingStyled = styled.div`
    display: flex;
`;

export const ProductPriceContainerStyled = styled.div`
    margin-right: 22px;
`;

export const ProductRatingContainerStyled = styled.div`

`;

export const DetailHeaderStyled = styled.div`
    font-size: 12px;
    font-weight: 400;
    margin-bottom: 4px;
    color: ${({ theme }) => theme.colors.gray};
    white-space: nowrap;
`;

export const DetailPriceStyled = styled.div`
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: ${({ theme }) => theme.colors.orange};
`;

export const DetailStarStyled = styled.div`
    display: flex;
    align-items: center;
`;

