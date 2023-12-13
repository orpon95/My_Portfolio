import React from 'react';
import { NavLink } from 'react-router-dom';

const JobDetails = () => {
    return (
        <div>
            <div className="flex flex-col justify-center w-[80%] my-10 mx-auto lg:flex-row">
                <NavLink to={"/project"}><div className="grid w-40 flex-grow h-32 card text-white border-2 rounded-box place-items-center">Project</div></NavLink>
                <div className="divider text-white lg:divider-horizontal">OR</div>
                <NavLink  ><div className="grid w-40 flex-grow h-32 card text-white border-2 rounded-box place-items-center">Project Details</div></NavLink>
            </div>
            {/* pic div */}
            <div>
                <img className='w-[80%] mx-auto' src="https://i.ibb.co/v3QTCxT/Screenshot-2023-12-12-141819.png" alt="" />
            </div>

            {/* all info  */}
            <div className='flex flex-col lg:flex-row text-white'>
                {/* description div */}
                <div className='p-10 border-2 border-blue-50 shadow-lg shadow-fuchsia-500 my-10'>
                    <p className='text-lg font-semibold'>
                        A websites About posting and bititng job
                    </p >
                    <p className='text-4xl font-black my-5'>job city is a websites where u can post jobs as job owner and can bit jobs as employee</p>

                    {/* des para */}
                    <p className='text-lg font-semibold'>


                        Job City, your ultimate destination for a seamless and dynamic job marketplace! At Job City, we've created a thriving online ecosystem where job owners and skilled professionals come together for mutually beneficial collaborations. Whether you're an employer looking to fill a vacancy or a talented individual seeking exciting opportunities, Job City is your gateway to a world of career possibilities. <br /> <br />

                        For employers, our platform provides a straightforward and efficient way to post job openings, reaching a diverse pool of skilled candidates. From entry-level positions to executive roles, Job City accommodates all industries and professions. Our user-friendly interface allows job owners to create detailed listings, specifying job requirements, responsibilities, and desired qualifications. With a streamlined bidding system, employers can easily assess and select the most qualified candidates for their roles. <br /> <br />

                        Job seekers, on the other hand, can explore a wide range of job opportunities and submit bids that showcase their skills and expertise. Whether you're a freelancer, a seasoned professional, or someone looking for part-time gigs, Job City caters to the diverse needs of the modern workforce. Our platform is designed to empower individuals to take control of their careers, allowing them to bid on jobs that align with their skills and interests. <br /><br />
                    </p>


                </div>
                {/* info div */}
                <div className='p-8'>
                    <div className='bg-black  p-6 text-center h-full shadow-lg shadow-black  rounded-lg'>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Project Name: job city</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Duration:3 days</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'>Date: 4/11/2023</div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;