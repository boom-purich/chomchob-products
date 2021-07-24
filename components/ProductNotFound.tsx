import React from 'react';
import {
    ProductNotFoundImage,
    ProductNotFoundStyled,
    ProductNotFoundWord
} from 'styles/ProductNotFound';

const ProductNotFound = () => {
    return (
        <ProductNotFoundStyled>
            <ProductNotFoundImage />
            <ProductNotFoundWord>
                <div className="topic-word">ไม่พบสินค้าในระบบ</div>
                <div className="detail-word">ขอโทษในความไม่สะดก ไม่พบสิ่งที่คุณหา</div>
            </ProductNotFoundWord>
        </ProductNotFoundStyled>
    );
}

export default ProductNotFound;
