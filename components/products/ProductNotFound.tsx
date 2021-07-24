import React from 'react';
import styled from 'styled-components';
import { PushUpNotFoundKeyFrame } from 'components/shared';

const ProductNotFound = () => {
    return (
        <Container>
            <NotFoundImage />
            <NotFoundWord>
                <div className="topic-word">ไม่พบสินค้าในระบบ</div>
                <div className="detail-word">ขอโทษในความไม่สะดก ไม่พบสิ่งที่คุณหา</div>
            </NotFoundWord>
        </Container>
    );
}

export default ProductNotFound;

const Container = styled.div`
    position: relative;
    max-width: 400px;
    width: 100%;
    height: auto;
    animation: .85s ${PushUpNotFoundKeyFrame} ease-in-out;
    padding-top: 28px;
`;

const NotFoundImage = styled.img.attrs(({ }) => ({
    src: 'not_found.svg',
    alt: 'Not Found Image'
}))`
    width: 100%;
    height: 100%;
`;

const NotFoundWord = styled.div`
text-align: center;
padding-top: 20px;

.topic-word {
    font-size: 28px;
    font-weight: 500;
    color: ${({theme}) => theme.colors.orange};
}

.detail-word {
    font-size: 18px;
    word-break: break-all;
}
`;
