import { useState, useRef, useEffect } from 'react';
import { NavbarContainerStyled, ListStyled, NavbarContentStyled, LogoImage, MenuListStyled, MenuBarButton, MenuMobileScreenContainer, MenuMobileScreenContent, MenuMobileListStyled } from 'styles/Navbar';
import { useNavbar } from 'contexts';
import Slide from '@material-ui/core/Slide';
import { NoneScrollStyle } from 'components/shared';

const menuList = [{
    name: 'Home',
    link: '/',
}, {
    name: 'New Products',
    link: '/new-products'
}, {
    name: 'Women',
    link: '/women',
}, {
    name: 'Men',
    link: '/men'
}, {
    name: 'Kid',
    link: '/kid'
}, {
    name: 'Accessories',
    link: '/accessories'
}];

const Navbar = () => {

    const { openNavbar, changeOpenNavbar } = useNavbar();
    const navbarRef = useRef(null);
    const useShadow = () => {
        const [showShadow, setShadow] = useState<boolean>(false);

        const settingShadow = () => {
            if (window.scrollY === 0) {
                setShadow(false);
            } else {
                setShadow(true);
            }
        }

        useEffect(() => {
            if (typeof window !== 'undefined') {
                window.addEventListener("scroll", settingShadow);
                return () => {
                    window.removeEventListener("scroll", settingShadow);
                };
            }
        }, [])

        return {
            showShadow
        }
    }

    const { showShadow } = useShadow();

    return (
        <NavbarContainerStyled ref={navbarRef} openNavbar={openNavbar} visibleShadow={showShadow}>
            <NavbarContentStyled visibleShadow={showShadow || openNavbar}>
                <MenuBarButton onClick={changeOpenNavbar}>
                    <i className={`fas ${openNavbar ? 'fa-times' : 'fa-bars'}`}></i>
                </MenuBarButton>
                <LogoImage src={'icons/logo.svg'} />
                <MenuListStyled>
                    {menuList.map((list, index) => (
                        <ListStyled key={`menu-list-${index}`}>{list?.name}</ListStyled>
                    ))}
                </MenuListStyled>
            </NavbarContentStyled>
            {openNavbar && <NoneScrollStyle />}
            <Slide
                in={openNavbar}
                direction="down"
                timeout={{enter:500,exit:800}}
            >
                <MenuMobileScreenContainer>
                    <MenuMobileScreenContent>
                        {menuList && menuList.map((list, index) => (
                            <MenuMobileListStyled key={`menu-mobile-list-${index}`} onClick={changeOpenNavbar}>{list?.name}</MenuMobileListStyled>
                        ))}
                    </MenuMobileScreenContent>
                </MenuMobileScreenContainer>
            </Slide>
        </NavbarContainerStyled>
    );
}

export default Navbar;
