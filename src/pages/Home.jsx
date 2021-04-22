import React, { useState } from 'react'

// @ Data import
import { homeObjOne } from '../components/InfoSection/Data';

// @ components
import Sidebar from '../components/Sidebar/Sidebar';
import Navbar from '../components/Navbar/Navbar';
import Section from '../components/Section/Section';
import InfoSection from '../components/InfoSection/InfoSection';
import Project from '../components/Project/Project';
import Footer from '../components/Footer/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggleBtn = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggleBtn={toggleBtn} />
            <Navbar toggleBtn={toggleBtn} />
            <Section />
            <InfoSection {...homeObjOne} />
            <Project />
            <Footer />
            {/* <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} /> */}
        </>
    )
}

export default Home
