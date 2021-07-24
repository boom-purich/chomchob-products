import styled, {keyframes} from 'styled-components';

export const PushUp = keyframes`
    0% {
        top: -20%;
        opacity: 0;
    }

    100% {
        top: 0%;
        opacity 1;
    }
`;

export const ProductNotFoundStyled = styled.div`
    position: relative;
    max-width: 400px;
    width: 100%;
    height: auto;
    animation: .85s ${PushUp} ease-in-out;
    padding-top: 28px;

`;

export const ProductNotFoundImage = styled.img.attrs(({ }) => ({
    src: 'not_found.svg',
    alt: 'Not Found Image'
}))`
    width: 100%;
    height: 100%;
`;

export const ProductNotFoundWord = styled.div`
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