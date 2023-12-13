import React from 'react';
import resume from "./resume4.pdf"
import { TypeAnimation } from 'react-type-animation';

const Banner = () => {
    return (
        <div className='my-6'>
            <div className="hero min-h-screen text-white">
                <div className="hero-content  flex-col lg:flex-row">
                    <img src="https://i.ibb.co/pLPKfBy/81d809d4-eb52-47cc-bccd-2062b52056d0-removebg-preview.png" className="w-full h-full border-r-2 rounded-r-full " />
                    <div>
                        <h1 className="text-5xl font-bold"> Hello! I’m
                        Yeasin Arafat


                        </h1>
                        <p className="py-6 text-fuchsia-500"> <TypeAnimation
                            sequence={[
                                // Same substring at the start will only be typed out once, initially
                                'font end developer .',
                                1000, // wait 1s before replacing "Mice" with "Hamsters"
                                'javascript developer',
                                1000,
                                'react developer',
                                1000,
                                'mern stack developer',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            style={{ fontSize: '2em', display: 'inline-block' }}
                            repeat={Infinity}
                        />




                        </p>

                        <a href={resume} download="resume.pdf" ><button className="btn backdrop-blur-2xl bg-slate-500">Download Resume</button></a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;