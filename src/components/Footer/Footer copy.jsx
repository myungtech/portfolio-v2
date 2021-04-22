import React from 'react';
// import { animateScroll as scroll } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import {
    FooterContainer,
    FooterLink,
    FooterLinkContainer,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLinkWrapper,
    FooterWrap,
    SocialIconLink,
    SocialIcons,
    SocialLogo,
    SocialMedia,
    SocialMediaWrap,
    WebsiteRights
} from './FooterCSS';

const Footer = () => {

    // const toggleHome = () => {
    //     // 맨 위로 스크롤
    //     scroll.scrollToTop();
    // }

    return (
        <FooterContainer id="contact">
            <FooterWrap>
                <FooterLinkContainer>

                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>ABOUT ME</FooterLinkTitle>
                            <FooterLink to='/'>HOME</FooterLink>
                            <FooterLink to='/'>CAREERS</FooterLink>
                            <FooterLink to='/'>SKILLS</FooterLink>
                            <FooterLink to='/'>PROJECTS</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>

                </FooterLinkContainer>

                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            MYUNG'S
                        </SocialLogo>
                        <WebsiteRights>
                            {new Date().getFullYear()} MyungTech ( ◍•㉦•◍ ) - All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink
                                href="https://github.com/myungtech"
                                target="_blank"
                                aria-label="github">
                                <FaGithub />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>

            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
