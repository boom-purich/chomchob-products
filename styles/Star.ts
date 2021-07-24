import styled from 'styled-components';

export const StarStyled = styled.img.attrs(({ full }) => ({
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