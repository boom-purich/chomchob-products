import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';
import Navbar from './navbar';
import Footer from './footer';
import { NavbarProvider } from 'contexts';

const Layout = ({ children }) => {

    return (
        <NavbarProvider>
            <ThemeProvider theme={theme}>
                <Container>
                    <Navbar />
                        {children}
                    <Footer />
                </Container>
            </ThemeProvider>
        </NavbarProvider>
    );
}

export default Layout;

const Container = styled.div`
    width: 100%;
    height: 100vh;
`;