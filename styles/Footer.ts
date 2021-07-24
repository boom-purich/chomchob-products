import styled from 'styled-components';

export const FooterContainerStyled = styled.div`
    height: 54px;
    text-align: center;
    display: grid;
    place-items: center;
    font-size: 12px;
    font-weight: 400;

    ${({theme}) => `
        background-color: ${theme.colors.blue};
        color:${theme.colors.snow};
    `}
`;