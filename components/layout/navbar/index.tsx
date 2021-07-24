import { useState,useEffect,useRef } from 'react';
import styled from 'styled-components';
import { useNavbar } from 'contexts';
import NavbarDesktop from './components/NavbarDesktop';
import NavbarMobile from './components/NavbarMobile';

const Navbar = () => {

    const { openNavbar } = useNavbar();
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
        <Container ref={navbarRef} openNavbar={openNavbar} visibleShadow={showShadow}>
            <NavbarDesktop showShadow={showShadow}/>
            <NavbarMobile/>
        </Container>
    );
}

export default Navbar;

const Container = styled.div`
    background-color: ${({ theme }) => theme.colors.orange};
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 10;
    @media only screen and (min-width:920px) {
        box-shadow: ${({ visibleShadow }) => visibleShadow && `rgba(0, 0, 0, 0.18) 0px 8px 8px -8px`} ;
    }
`;
