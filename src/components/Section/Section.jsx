import React, { useState } from 'react'
import {
    SectionBg,
    SectionContainer,
    ArrowForward,
    ArrowRight,
    SectionBtnWrapper,
    SectionContent,
    SectionH1,
    SectionP,
    HomeBg
} from './SectionCSS';
import { Button } from '../ButtonCSS';

const Section = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <SectionContainer id="home">
            <SectionBg>
                <HomeBg />
            </SectionBg>
            <SectionContent>
                <SectionH1>안녕하세요 박진명의 포트폴리오입니다. teset test</SectionH1>
                <SectionP>
                    REACT와 NODEJS에 진심인 개발자 박진명입니다.
                </SectionP>
                <SectionBtnWrapper>
                    <Button
                        to="contact"
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                    >
                        CONTACT {hover ? < ArrowForward /> : < ArrowRight />}
                    </Button>
                </SectionBtnWrapper>
            </SectionContent>
        </SectionContainer>
    )
}

export default Section;
