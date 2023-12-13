import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import Education from '../Education/Education';
import Skills from '../../Skills/Skills';
import Experience from '../Experience/Experience';
// import Skills from '../../Skills';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Education></Education>
            <Skills></Skills>
            <Experience></Experience>
            
        </div>
    );
};

export default Home;