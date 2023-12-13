import React from 'react';

const Experience = () => {
    return (
        <div>
            <h1 className='my-6 font-bold text-4xl text-gray-400 text-center '>work Experience</h1>

            <div className="flex justify-center">
                <ul className="steps steps-vertical text-white text-center justify-center space-y-6 ">
                    <li className="step backdrop-blur-xl  step-primary">
                        <div className="card-body border-2 rounded-lg">
                            <h2 className="card-title text-2xl font-black"> worked with "Programmming Hero" in mern stack sector</h2>
                            <p> Developed and deployed 12 web applications using the Javascript ,react , node js ,express
                            </p>

                        </div>

                    </li>
                    <li className="step backdrop-blur-xl  step-primary">
                        <div className="card-body border-2 rounded-lg">
                            <h2 className="card-title text-2xl font-black">developed Four major mern project</h2>
                            <p> Developed and deployed 4 web applications using the MERN (MongoDB, Express.js, React, Node.js) stack.
                            </p>

                        </div>

                    </li>
                    <li className="step backdrop-blur-xl ">
                        <div className="card-body border-2 rounded-lg">
                            <h2 className="card-title text-2xl font-black">worked with mongodb</h2>
                            <p> Utilized MongoDB to design and manage scalable and efficient databases for various projects.</p>

                        </div>
                    </li>
                    <li className="step backdrop-blur-xl ">
                        <div className="card-body border-2 rounded-lg">
                            <h2 className="card-title text-2xl font-black">implemented REestful Api using Express js</h2>
                            <p> Implemented server-side logic and RESTful APIs using Express.js and Node.js, ensuring smooth communication between the client and server.</p>

                        </div>
                    </li>
                    <li className="step backdrop-blur-xl ">
                        <div className="card-body border-2 rounded-lg">
                            <h2 className="card-title text-2xl font-black">Collaborated with cross-functional teams</h2>
                            <p> Collaborated with cross-functional teams, including designers and QA testers, to deliver polished and cohesive end-to-end solutions.</p>

                        </div>
                    </li>
                </ul>

            </div>

        </div>
    );
};

export default Experience;