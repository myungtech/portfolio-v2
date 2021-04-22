import React, { useState, useEffect } from 'react'
import { FaBars } from 'react-icons/fa';
import { BsCodeSlash } from 'react-icons/bs';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavbarContainer,
    NavbarLogo,
    MobileIcon,
    NavItem,
    NavMenu,
    NavLinks,
} from './NavbarCSS'


const Navbar = ({ toggleBtn }) => {

    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        // 맨 위로 스크롤
        scroll.scrollToTop();
    }

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav scrollNav={scrollNav}>
                    <NavbarContainer>
                        <NavbarLogo to='/' onClick={toggleHome}>
                            <BsCodeSlash /> JIN.MYUNG
                    </NavbarLogo>
                        <MobileIcon onClick={toggleBtn}>
                            <FaBars />
                        </MobileIcon>
                        <NavMenu>
                            <NavItem>
                                <NavLinks to='home'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    HOME
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='about'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    ABOUT
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='project'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    PROJECTS
                                </NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to='contact'
                                    smooth={true}
                                    duration={500}
                                    spy={true}
                                    exact='true'
                                    offset={-80}
                                >
                                    CONTACT
                                </NavLinks>
                            </NavItem>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar
