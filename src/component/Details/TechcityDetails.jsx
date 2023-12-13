import React from 'react';
import { NavLink } from 'react-router-dom';

const TechcityDetails = () => {
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
                         A  website about buying all branded
                    </p >
                    <p className='text-4xl font-black my-5'>tech city is a websites where u can buy various kind of branded phone</p>

                    {/* des para */}
                    <p className='text-lg font-semibold'>


                        Tech City isn't just a marketplace; it's a tech haven where you can also explore an extensive array of high-performance computers and laptops. Unleash your creativity, boost your productivity, or dive into immersive gaming experiences with the most advanced computing technology available. <br /> <br />

                        We understand that the world of tech can be overwhelming, so our user-friendly interface is designed to make your shopping experience smooth and enjoyable. With Tech City, you can trust that every purchase is backed by quality assurance, ensuring that you receive genuine products from the brands you love. <br /> <br />

                        As technology enthusiasts ourselves, we are committed to staying at the forefront of the industry. Our catalog is regularly updated to feature the latest releases and trends, so you're always in the loop with the hottest tech offerings.
                    </p>


                </div>
                {/* info div */}
                <div className='p-8'>
                    <div className='bg-black  p-6 text-center h-full shadow-lg shadow-black  rounded-lg'>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Project Name: Tech city</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Duration:3 days</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'>Date: 24/10/2023</div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default TechcityDetails;