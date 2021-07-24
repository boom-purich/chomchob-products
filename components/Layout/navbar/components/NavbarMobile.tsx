import React from 'react';
import styled from 'styled-components';
import Slide from '@material-ui/core/Slide';
import { useNavbar } from 'contexts';
import { NoneScrollStyle } from 'components/shared';
import { menuList } from '../constants';

const NavbarMobile = () => {

    const { openNavbar, changeOpenNavbar } = useNavbar();

    return <>
        {openNavbar && <NoneScrollStyle />}
        <Slide
            in={openNavbar}
            direction="down"
            timeout={{ enter: 500, exit: 800 }}
        >
            <Container>
                <Content>
                    {menuList && menuList.map((list, index) => (
                        <List key={`menu-mobile-list-${index}`} onClick={changeOpenNavbar}>{list?.name}</List>
                    ))}
                </Content>
            </Container>
        </Slide>
    </>;
}

export default NavbarMobile;

const Container = styled.div`
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.orange};

    @media only screen and (min-width:920px) {
        display:none ;
    }
`;

const Content = styled.div`
    color: ${({ theme }) => theme.colors.white};
    display: grid;
    place-items: center;
    padding-top: 28px;
`;

const List = styled.div`
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
