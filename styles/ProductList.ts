import styled from 'styled-components';

export const ProductListContainerStyled = styled.div`
    display: grid;
    grid-column-gap: 22px;
    grid-row-gap: 25px;

    ${({ found }) => found ? `
        grid-template-columns : repeat(auto-fill,minmax(275px,1fr));
    ` : `
        place-items:center;
    `};

    body {
        background-color: blue;
    }
`;




