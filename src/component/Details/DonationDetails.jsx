import React from 'react';
import { NavLink } from 'react-router-dom';

const DonationDetails = () => {
    return (
        <div>
            <div className="flex flex-col justify-center w-[80%] my-10 mx-auto lg:flex-row">
                <NavLink to={"/project"}><div className="grid w-40 flex-grow h-32 card text-white border-2 rounded-box place-items-center">Project</div></NavLink>
                <div className="divider text-white lg:divider-horizontal">OR</div>
                <NavLink  ><div className="grid w-40 flex-grow h-32 card text-white border-2 rounded-box place-items-center">Project Details</div></NavLink>
            </div>
            {/* pic div */}
            <div>
                <img className='w-[80%] mx-auto' src="https://i.ibb.co/3WfXfKg/Screenshot-2023-12-12-141545.png" alt="" />
            </div>

            {/* all info  */}
            <div className='flex flex-col lg:flex-row text-white'>
                {/* description div */}
                <div className='p-10 border-2 border-blue-50 shadow-lg shadow-fuchsia-500 my-10'>
                    <p className='text-lg font-semibold'>
                        Donation campaign  is non profit websites
                    </p >
                    <p className='text-4xl font-black my-5'>Donation campaign  is non profit websites and fund rising website.</p>

                    {/* des para */}
                    <p className='text-lg font-semibold'>
                        "Donation Campaign," a heartfelt platform dedicated to making a positive impact on the world. As a non-profit organization, our mission is to connect compassionate individuals with meaningful causes, facilitating a seamless and secure way to contribute to the betterment of society. At Donation Campaign, we believe in the power of collective generosity, and we strive to create a community-driven space where kindness knows no bounds. <br /> <br />

                        Our website serves as a hub for various charitable campaigns and initiatives, spanning across diverse sectors such as education, healthcare, environmental conservation, and more. We provide a user-friendly interface that empowers visitors to explore, engage, and support the causes that resonate with their values. Whether you are passionate about supporting underprivileged communities, championing environmental sustainability, or aiding disaster relief efforts, Donation Campaign offers a multitude of opportunities to make a meaningful difference. <br /> <br />

                        Security and transparency are at the core of our operations. We ensure that every donation is handled with the utmost care, and our platform provides detailed insights into how your contribution directly impacts the cause you've chosen to support. Through collaboration with reputable non-profit organizations and community leaders, we strive to create a network of positive change that extends far beyond the digital realm.
                    </p>


                </div>
                {/* info div */}
                <div className='p-8'>
                    <div className='bg-black  p-6 text-center h-full shadow-lg shadow-black  rounded-lg'>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Project Name: Donation Campaign</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Duration:3 days</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'>Date: 24/09/2023</div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DonationDetails;