import styled from 'styled-components';

export const MainPageContainerStyled = styled.div`
    margin-top: 76px;

    @media only screen and (max-width:919px) {
        margin-top:60px;
    }

    ${({found}) => found ? `
        min-height: 100vh;
    ` : `
        height: calc(100vh - 130px);

        @media only screen and (max-width:919px) {
            height: calc(100vh - 114px);
        }
    `}
`;

export const MainPageContentStyled = styled.div`
    max-width: 1206px;
    width: auto;
    margin: 0 auto;
    padding: 50px 20px;

    @media only screen and (max-width:919px) {
        padding: 36px 20px;
    }
`;

export const ProductAmountStyled = styled.div`
    font-size: 16px;
    font-weight: 600;
    color: ${({theme}) => theme.colors.black};
    padding-bottom: 20px;
`;