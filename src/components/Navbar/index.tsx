import { useState } from "react";
import { NavbarWrapper } from "./NavbarWrapper";

const Navbar = () => {

    const [currentTheme, setCurrentTheme] = useState<"dark" | "light">('light')

    const changeTheme = () => {
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        document.documentElement.setAttribute('data-theme', newTheme)
        setCurrentTheme(newTheme);
    }

    return (
        <>
            <NavbarWrapper SomeHeight="90px">
                <button onClick={
                    () => changeTheme()
                }>Theme</button>
            </NavbarWrapper>
        </>
    )
}
export default Navbar;