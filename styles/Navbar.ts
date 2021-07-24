import styled from 'styled-components';

export const NavbarContainerStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.orange};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    @media only screen and (min-width:920px) {
        box-shadow: ${({ visibleShadow }) => visibleShadow && `rgba(0, 0, 0, 0.18) 0px 8px 8px -8px`} ;
    }
    
`;

export const NavbarContentStyled = styled.div`
    background-color: ${({ theme }) => theme.colors.orange};
    display: flex;
    align-items: center;
    max-width: 1206px;
    margin: 0 auto;
    padding: 20px;
    position: relative;
    z-index:3;
    

    @media only screen and (max-width:919px) {
        padding: 12px 20px;
        box-shadow: ${({ visibleShadow }) => visibleShadow && `rgba(0, 0, 0, 0.18) 0px 8px 8px -8px`};
    }
`;

export const LogoImage = styled.img.attrs(({ src }) => ({
    src: src,
    alt: 'Chomchob-Logo'
}))`
    max-width: 77px;
    width: auto;
    object-fit:contain;
    justify-self: flex-start;

    @media only screen and (max-width:919px) {
        margin: 0 auto;
    }
`;

export const MenuListStyled = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-self: center;
    color: ${({ theme }) => theme.colors.white};

    @media only screen and (max-width:919px) {
        display: none;
    }
`;

export const MenuBarButton = styled.button`
    border: none;
    background: none;
    position: absolute;
    cursor: pointer;

    @media only screen and (min-width:920px) {
        display: none;
    }
    
    .fa-bars,.fa-times {
        font-size: 20px;
        color: ${({ theme }) => theme.colors.white};
    }
`;

export const ListStyled = styled.span`
        margin-right: 60px;
        font-weight: 500;
        letter-spacing: .5px;
        position: relative;
        cursor: pointer;

        &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 0%;
        height: 1px;
        background: ${({ theme }) => theme.colors.white};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    &:hover {
        
        &::after {
            width: 100%;
        }
    }

        &:last-child {
            margin-right: 0px;
        }
`;

export const MenuMobileScreenContainer = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.orange};

    @media only screen and (min-width:920px) {
        display:none ;
    }
    
`;

export const MenuMobileScreenContent = styled.div`
    /* width: 100%; */
    color: ${({ theme }) => theme.colors.white};
    display: grid;
    place-items: center;
    padding-top: 28px;
`;

export const MenuMobileListStyled = styled.div`
    margin-bottom: 28px;
    text-align: center;
    position: relative;
    font-weight: 500;
    letter-spacing: .5px;
    cursor: pointer;
    
    &::after {
        content: '';
        position: absolute;
        bottom: -4px;
        left: 50%;
        transform: translate(-50%,-50%);
        width: 0%;
        height: 1px;
        background: ${({ theme }) => theme.colors.white};
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
    }

    &:hover {
        
        &::after {
            width: 100%;
        }
    }

    &:last-child {
        margin-bottom: 0px;
    }
`;