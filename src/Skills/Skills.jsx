import React from 'react';
import ProgressBar from "@ramonak/react-progress-bar";

const Skills = () => {
    return (
        
       <div className='w-[80%] mx-auto'>
        <h1 className='my-6 font-bold text-4xl text-gray-400 text-center '>Skills</h1>
        <div>
        <h1 className='text-xl text-white font-bold my-4'>Javascript</h1>
         <ProgressBar completed={95} />
        <h1 className='text-xl text-white font-bold my-4'>react js</h1>
         <ProgressBar completed={90} />
        <h1 className='text-xl text-white font-bold my-4'>node js</h1>
         <ProgressBar completed={75} />
        <h1 className='text-xl text-white font-bold my-4'>express js</h1>
         <ProgressBar completed={65} />
        <h1 className='text-xl text-white font-bold my-4'>mongodb</h1>
         <ProgressBar completed={85} />
       </div>
       </div>
    );
};

export default Skills;