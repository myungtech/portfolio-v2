import React from 'react';
import './Footer.css';
// import { animateScroll as scroll } from 'react-scroll';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {

    // const toggleHome = () => {
    //     // 맨 위로 스크롤
    //     scroll.scrollToTop();
    // }

    return (
        <div className='FooterContainer' id="contact">
            <div className='FooterWrap'>
                <div className='FooterLinkContainer'>
                    <h1 className='FooterLinkTitle'>LET'S TALK</h1>
                    <div className='FooterLinkWrapper'>
                        <div className='FooterLinkItems'>
                            <div className='FooterLink'>
                                wlsaud1992@gmail.com
                            </div>
                            <div className='FooterLink'>
                                Tel : +82 10 3883 7907
                            </div>
                        </div>
                    </div>
                </div>

                <div className='SocialMedia'>
                    <div className='SocialMediaWrap'>
                        <div className='SocialLogo'>
                            MYUNG'S
                        </div>
                        <div className='WebsiteRights'>
                            {new Date().getFullYear()} MyungTech ( ◍•㉦•◍ ) - All rights reserved
                        </div>
                        <div className='SocialIcons'>
                            <Link
                                href="https://github.com/myungtech"
                                target="_blank"
                                aria-label="github">
                                <FaGithub />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Footer
