import { useState } from 'react';
import { ProductListContainerStyled } from 'styles/ProductList';
import { Product } from 'types';
import ProductCardComponent from './ProductCard';
import ProductNotFoundComponent from './ProductNotFound';
import { NoneScrollStyle } from 'components/shared';

const ProductList = ({ products }) => {

    const [productList] = useState<Array<Product>>(products);

    return (
        <ProductListContainerStyled found={productList.length > 0}>
            {productList && productList.length > 0 ? productList.map((list, index) => (
                <ProductCardComponent key={`product-card-${index + 1}`} product={list} />
            )) :
                <>
                    <NoneScrollStyle/>
                    <ProductNotFoundComponent />
                </>}
        </ProductListContainerStyled>
    );
};

export default ProductList;
