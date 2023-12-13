import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { NavLink } from 'react-router-dom';

const Projec = () => {
    return (
        <div>
            <Carousel>
                <div className='my-8 w-[80%] border-4 rounded-lg border-red-600 mx-auto'>
                    <img className=' border-4 rounded-lg border-red-600 ' src="https://i.ibb.co/3WfXfKg/Screenshot-2023-12-12-141545.png" />
                    <p className="legend "><span className='text-2xl font-black'>donation campaign---</span>
                        <span className='text-xl '>A websites about donation </span>
                        <NavLink className="text-blue-600" to={"/donationDetails"}>[click to see details]</NavLink>
                    </p>
                </div>
                {/* 2 */}
                <div className='my-8 w-[80%] border-4 rounded-lg border-red-600 mx-auto'>
                    <img className=' border-4 rounded-lg border-red-600 ' src="https://i.ibb.co/v3QTCxT/Screenshot-2023-12-12-141819.png" />
                    <p className="legend "><span className='text-2xl font-black'>Tech city ----</span>
                        <span className='text-xl '>A websites about Buying various branded phone </span>
                        <NavLink className="text-blue-600" to={"/techDetails"}>[click to see details]</NavLink>
                    </p>
                </div>
                {/* 3 */}
                <div className='my-8 w-[80%] border-4 rounded-lg border-red-600 mx-auto'>
                    <img className=' border-4 rounded-lg border-red-600 ' src="https://i.ibb.co/t3mr76S/Screenshot-2023-12-12-142029.png" />
                    <p className="legend "><span className='text-2xl font-black'>Job city ----</span>
                        <span className='text-xl '>A websites about Finding and bitting job as your wish </span>
                        <NavLink className="text-blue-600" to={"/jobDetails"}>[click to see details]</NavLink>
                    </p>
                </div>
                {/* 4 */}
                <div className='my-8 w-[80%] border-4 rounded-lg border-red-600 mx-auto'>
                    <img className=' border-4 rounded-lg border-red-600 ' src="https://i.ibb.co/wh8g2mq/Screenshot-2023-12-12-142247.png" />
                    <p className="legend "><span className='text-2xl font-black'>Survey world ----</span>
                        <span className='text-xl '>A websites about polling and survey system </span>
                        <NavLink className="text-blue-600" to={"/surveyDetails"}>[click to see details]</NavLink>
                    </p>
                </div>
            </Carousel>





        </div>
    );
};

export default Projec;