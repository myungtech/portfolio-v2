import React from 'react'
import {
    CloseIcon,
    Icon,
    SidebarContainer,
    SidebarMenu,
    SidebarLink,
    SidebarWrapper
} from './SidebarCSS';

const Sidebar = ({ toggleBtn, isOpen }) => {
    return (
        <SidebarContainer isOpen={isOpen} onClick={toggleBtn}>
            <Icon onClick={toggleBtn}>
                <CloseIcon />
            </Icon>

            <SidebarWrapper>
                <SidebarMenu>

                    <SidebarLink to="home" onClick={toggleBtn}>
                        HOME
                    </SidebarLink>
                    <SidebarLink to="about" onClick={toggleBtn}>
                        ABOUT
                    </SidebarLink>
                    <SidebarLink to="projects" onClick={toggleBtn}>
                        PROJECTS
                    </SidebarLink>
                    <SidebarLink to="contact" onClick={toggleBtn}>
                        CONTACT
                    </SidebarLink>

                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
