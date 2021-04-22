import React from 'react';
// import './project.css';

import {
    ProjectContainer,
    ProjectH1,
    ProjectH2,
    ProjectP,
    ProjectCard,
    ProjectIcon,
    ProjectWrapper
} from './ProjectCSS';

// @Icon
const Icon1 = '';
const Icon2 = '';
const Icon3 = '';
// const Icon1 = '/img/img-3.jpg';
// const Icon2 = '/img/img-4.jpg';
// const Icon3 = '/img/img-5.jpg';

const Project = () => {
    return (
        <ProjectContainer id="project">
            <ProjectH1>PROJECTS</ProjectH1>
            <ProjectWrapper>

                <ProjectCard>
                    <ProjectIcon src={Icon1} />
                    <ProjectH2>Reduce EXPENSES</ProjectH2>
                    <ProjectP>WE HELP REDUCE YOUR FEES AND INCRESE YOUR OVERALL REVENUE</ProjectP>
                </ProjectCard>

                <ProjectCard>
                    <ProjectIcon src={Icon2} />
                    <ProjectH2>React HOOKS</ProjectH2>
                    <ProjectP>WE HELP REDUCE YOUR FEES AND INCRESE YOUR OVERALL REVENUE</ProjectP>
                </ProjectCard>

                <ProjectCard>
                    <ProjectIcon src={Icon3} />
                    <ProjectH2>REACT REDUX!!!</ProjectH2>
                    <ProjectP>WE HELP REDUCE YOUR FEES AND INCRESE YOUR OVERALL REVENUE</ProjectP>
                </ProjectCard>

            </ProjectWrapper>
        </ProjectContainer>
    )
}

export default Project;
