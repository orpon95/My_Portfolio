import React from 'react';

const Education = () => {
    return (
        <div className=''>
            <h1 className='my-6 font-bold text-4xl text-gray-400 text-center '>Educational Qualification</h1>
            <div className="overflow-x-auto shadow-lg border-2 border-blue-400 w-[80%] mx-auto shadow-black text-gray-300 font-bold text-2xl">
                <table className="table">
                    {/* head */}
                    <thead className='text-gray-300 font-bold text-xl'>
                        <tr>
                            <th></th>
                            <th>Name of Degree</th>
                            <th> passing Year</th>
                            <th>Institute</th>
                            <th>Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <th>1</th>
                            <td>SSC</td>
                            <td>2015</td>
                            <td>Ideal School And College</td>
                            <td>GPA 5.00</td>
                        </tr>
                        {/* row 2 */}
                        <tr className="hover">
                            <th>2</th>
                            <td>HSC</td>
                            <td>2017</td>
                            <td>Metropolitan school and College</td>
                            <td>GPA 4.33</td>
                        </tr>
                        {/* row 3 */}
                        <tr>
                            <th>3</th>
                            <td>BSC in CSE</td>
                            <td>2019-2023</td>
                            <td>Manarat International University</td>
                            <td>CGPA 3.00</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Education;