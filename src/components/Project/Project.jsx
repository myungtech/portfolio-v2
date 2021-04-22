import React from 'react';
import './Project.css';

// @Icon

const Icon1 = '/img/myung12.jpg';
// const Icon2 = '/img/img-4.jpg';
// const Icon3 = '/img/img-5.jpg';

const Project = () => {
    return (
        <div className='ProjectContainer' id="project">
            <h1 className='ProjectH1'>PROJECTS</h1>
            <div className='ProjectWrapper'>

                <div className='ProjectCard'>
                    <img className='ProjectIcon' src={Icon1} />
                    <h2 className='ProjectH2'>Reduce EXPENSES</h2>
                    <p className='ProjectP'>Ejs + MongoDB + Express </p>
                </div>
                <div className='ProjectCard'>
                    <img className='ProjectIcon' src={Icon1} />
                    <h2 className='ProjectH2'>React HOOKS</h2>
                    <p className='ProjectP'>Ejs + MongoDB + Express </p>
                </div>
                <div className='ProjectCard'>
                    <img className='ProjectIcon' src={Icon1} />
                    <h2 className='ProjectH2'>React HOOKS</h2>
                    <p className='ProjectP'>Ejs + MongoDB + Express </p>
                </div>
                <div className='ProjectCard'>
                    <img className='ProjectIcon' src={Icon1} />
                    <h2 className='ProjectH2'>React HOOKS</h2>
                    <p className='ProjectP'>Ejs + MongoDB + Express </p>
                </div>
                <div className='ProjectCard'>
                    <img className='ProjectIcon' src={Icon1} />
                    <h2 className='ProjectH2'>React HOOKS</h2>
                    <p className='ProjectP'>Ejs + MongoDB + Express </p>
                </div>
                <div className='ProjectCard'>
                    <img className='ProjectIcon' src={Icon1} />
                    <h2 className='ProjectH2'>REACT REDUX!!!</h2>
                    <p className='ProjectP'>Ejs + MongoDB + Express </p>
                </div>

            </div>
        </div>
    )
}

export default Project;
