import { useState, createContext, useContext, ReactNode } from 'react';

type navbarContextType = {
    openNavbar: boolean;
    changeOpenNavbar: () => void;
}

const navbarContextDefaultType: navbarContextType = {
    openNavbar: false,
    changeOpenNavbar: () => { },
}

const NavbarContext = createContext<navbarContextType>(navbarContextDefaultType);

type Props = {
    children: ReactNode
}

export const useNavbar = () => {
    return useContext(NavbarContext);
}

export const NavbarProvider = ({ children }: Props) => {

    const [openNavbar, setOpenNavbar] = useState<boolean>(false);

    const changeOpenNavbar = () => {
        setOpenNavbar(prevOpen => prevOpen = !prevOpen);
    }

    const value = {
        openNavbar,
        changeOpenNavbar
    };

    return (
        <>
            <NavbarContext.Provider value={value}>
                {children}
            </NavbarContext.Provider>
        </>
    );


}