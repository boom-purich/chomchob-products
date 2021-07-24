import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Navbar from './Navbar';
import Footer from './Footer';
import { LayoutStyled } from 'styles/Layout';
import { NavbarProvider,useNavbar } from 'contexts';

const Layout = ({ children }) => {

    const { openNavbar } = useNavbar();

    return (
        <NavbarProvider>
            <ThemeProvider theme={theme}>
                <LayoutStyled>
                    <Navbar />
                    {children}
                    <Footer />
                </LayoutStyled>
            </ThemeProvider>
        </NavbarProvider>
    );
}

export default Layout;
