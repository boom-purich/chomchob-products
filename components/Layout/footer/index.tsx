import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Container>
            <div>Copyright © 2021 ChomCHOB. All Rights Reserved.</div>
        </Container>
    );
}

export default Footer;

const Container = styled.div`
    height: 54px;
    text-align: center;
    display: grid;
    place-items: center;
    font-size: 12px;
    font-weight: 400;

    ${({ theme }) => `
        background-color: ${theme.colors.blue};
        color:${theme.colors.snow};
    `}
`;
