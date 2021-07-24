import React from 'react';
import styled from 'styled-components';
import { useNavbar } from 'contexts';
import { menuList } from '../constants';

const NavbarDesktop = ({ showShadow }) => {

    const { openNavbar, changeOpenNavbar } = useNavbar();

    return (
        <Container visibleShadow={showShadow || openNavbar}>
            <MenuBarButton onClick={changeOpenNavbar}>
                <i className={`fas ${openNavbar ? 'fa-times' : 'fa-bars'}`}></i>
            </MenuBarButton>
            <LogoImage src={'icons/logo.svg'} />
            <MenuList>
                {menuList.map((list, index) => (
                    <List key={`menu-list-${index}`}>{list?.name}</List>
                ))}
            </MenuList>
        </Container>
    );
}

export default NavbarDesktop;


const Container = styled.div`
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

const MenuBarButton = styled.div`
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

const LogoImage = styled.img.attrs(({ src }) => ({
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

const MenuList = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-self: center;
    color: ${({ theme }) => theme.colors.white};

    @media only screen and (max-width:919px) {
        display: none;
    }
`;

const List = styled.div`
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

