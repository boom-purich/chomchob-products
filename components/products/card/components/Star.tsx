import React from 'react';
import styled from 'styled-components';

const Star = ({rating}) => {
    return (
        <Container>
            {
                Array.from(new Array(5)).map((list,index) => (
                    <StarStyled key={`rating-${index+1}`} full={(index+1) <= rating}/>
                ))
            }
        </Container>
    );
}

export default Star;

const Container = styled.div`
    display: flex;
    align-items: center;
`;

const StarStyled = styled.img.attrs(({ full }) => ({
    src: full ? 'icons/star-full.svg' : 'icons/star.svg',
    alt: 'Star-Icon'
}))`
    width: 12px;
    height: 12px;
    margin-right: 1px;

    &:last-child {
        margin-right: 0px;
    }
`; 
