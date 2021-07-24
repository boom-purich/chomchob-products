import { useState } from 'react';
import { Product } from 'types';
import {
    ProductCardContainerStyled,
    ProductImageContainerStyled,
    ImageStyled,
    ProductDetailContainerStyled,
    BrandIconStyled,
    ProductPriceRatingStyled,
    ProductDetailContentStyled,
    ProductDetailTopicStyled,
    ProductPriceContainerStyled,
    ProductRatingContainerStyled,
    DetailHeaderStyled,
    DetailPriceStyled,
    DetailStarStyled,
} from 'styles/ProductCard';
import StarComponent from 'components/Star';

const ProductCard = ({ product }) => {

    const [productDetail] = useState<Product>(product);

    const separateMoneyComma = (amount:string) => {
        return amount ? amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") : '0.00';
    }

    return (
        <ProductCardContainerStyled>
            <ProductImageContainerStyled>
                <ImageStyled type="product" src={productDetail?.image_url} />
            </ProductImageContainerStyled>
            <ProductDetailContainerStyled>
                <BrandIconStyled>
                    <ImageStyled type="brand" src={productDetail?.brand_info?.url} />
                </BrandIconStyled>
                <ProductDetailContentStyled>
                    <ProductDetailTopicStyled>{productDetail?.name}</ProductDetailTopicStyled>
                    <ProductPriceRatingStyled>
                        <ProductPriceContainerStyled>
                            <DetailHeaderStyled>Price</DetailHeaderStyled>
                            <DetailPriceStyled>฿{separateMoneyComma(productDetail?.price)}</DetailPriceStyled>
                        </ProductPriceContainerStyled>
                        {productDetail?.review?.number > 0 &&
                            <ProductRatingContainerStyled>
                                <DetailHeaderStyled>Reviews ({productDetail?.review?.number} reviews)</DetailHeaderStyled>
                                <DetailStarStyled>
                                    <StarComponent rating={productDetail?.review?.rating}/>
                                </DetailStarStyled>
                            </ProductRatingContainerStyled>
                        }
                    </ProductPriceRatingStyled>
                </ProductDetailContentStyled>
            </ProductDetailContainerStyled>
        </ProductCardContainerStyled>
    );
}

export default ProductCard;
