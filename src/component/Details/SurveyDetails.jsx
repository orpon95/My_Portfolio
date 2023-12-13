import React from 'react';
import { NavLink } from 'react-router-dom';

const SurveyDetails = () => {
    return (
        <div>
            <div className="flex flex-col justify-center w-[80%] my-10 mx-auto lg:flex-row">
                <NavLink to={"/project"}><div className="grid w-40 flex-grow h-32 card text-white border-2 rounded-box place-items-center">Project</div></NavLink>
                <div className="divider text-white lg:divider-horizontal">OR</div>
                <NavLink  ><div className="grid w-40 flex-grow h-32 card text-white border-2 rounded-box place-items-center">Project Details</div></NavLink>
            </div>
            {/* pic div */}
            <div>
                <img className='w-[80%] mx-auto' src="https://i.ibb.co/wh8g2mq/Screenshot-2023-12-12-142247.png" alt="" />
            </div>

            {/* all info  */}
            <div className='flex flex-col lg:flex-row text-white'>
                {/* description div */}
                <div className='p-10 border-2 border-blue-50 shadow-lg shadow-fuchsia-500 my-10'>
                    <p className='text-lg font-semibold'>
                        A websites About polling and survey system
                    </p >
                    <p className='text-4xl font-black my-5'>survey world is a websites where u can share your opinion and you will see about various topic s survey report</p>

                    {/* des para */}
                    <p className='text-lg font-semibold'>
                        Survey World, the ultimate destination for sharing your voice on a myriad of topics! At Survey World, we've created a dynamic and user-friendly polling and survey system that empowers individuals to express their opinions on a wide range of subjects. Whether you're passionate about social issues, interested in consumer trends, or simply enjoy sharing your thoughts, Survey World is your go-to platform for meaningful engagement. <br /><br />

                        Our intuitive interface allows users to participate in polls and surveys effortlessly. Simply browse through an array of thought-provoking topics, cast your vote, and contribute to the collective wisdom of the Survey World community. We believe that every opinion matters, and by participating in surveys, users play a vital role in shaping conversations and influencing perspectives. <br /><br />

                        Once you've shared your valuable insights, Survey World provides immediate access to comprehensive reports and analytics. See how your opinions align with the community, explore diverse viewpoints, and gain a deeper understanding of prevailing sentiments on the topics that matter to you. The transparency of our reporting system ensures that every participant can witness the impact of their contribution firsthand. <br /><br />



                    </p>


                </div>
                {/* info div */}
                <div className='p-8'>
                    <div className='bg-black  p-6 text-center h-full shadow-lg shadow-black  rounded-lg'>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Project Name: survey world</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'> Duration:3 days</div>
                        <div className='p-4 w-[100%] my-5 rounded-lg border-2 text-white'>Date: 4/12/2023</div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default SurveyDetails;