import React from 'react';

const ProgramFees = ({data}) => {
    return (
        <div className="mt-8 px-4 flex flex-col lg:flex-row md:flex-row items-center">
            <div className='w-full lg:w-1/2 md:w-1/2 flex flex-col items-center mr-4'>
                <div className='px-4 py-8 bg-white rounded-md mb-4 w-full'>
                    <input type='radio' className='checked:bg-sky-600 apperance-none' name='course_type' value={"acdm"} />
                    <label className='text-black text-lg ml-4'>Advanced Certification in Digital Marketing</label>
                </div>
                <div className='px-4 py-8 bg-white rounded-md mb-4 w-full'>
                    <input type='radio' className='checked:bg-sky-600 apperance-none' name='course_type' value={"pcdm"} />
                    <label className='text-black text-lg ml-4'>Professional Certification in Digital Marketing & Strategy</label>
                </div>
                <div className='px-4 py-8 bg-white rounded-md w-full'>
                    <input type='radio' className='checked:bg-sky-600 apperance-none' name='course_type' value={"cm"} />
                    <label className='text-black text-lg ml-4'>Campus Immersion</label>
                </div>
            </div>
            <div className='w-full lg:w-1/2 md:w-1/2 flex flex-col items-center px-4 py-8 mt-2 bg-white rounded-md mb-4'>
                <div className='flex justify-between flex-col lg:flex-row md:flex-row w-full px-12'>
                    <div>
                        <p className='mb-0 text-lg text-black'>Duration</p>
                        <h3 className='mb-2 text-2xl text-semibold text-black'>4 Months</h3>
                    </div>
                    <div>
                        <p className='mb-0 text-lg text-black'>Fees starts as low as</p>
                        <h3 className='mb-2 text-2xl font-semibold text-black'>₹ 6,069 / Month</h3>
                    </div>
                </div>
                <div className='m-auto flex flex-row items-center'>
                    <p className='text-black text-normal font-semibold mr-4'>EMI Partner:</p>
                    <img src='https://iide.co/wp-content/w3-webp/uploads/2024/01/liquiloans_logo.pngw3.webp'></img>
                </div>
                <button className="bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 rounded w-full lg:w-1/2 md:w-1/2 text-lg " type='button'>Get Fees and Financial Plan</button>
                <p className='text-black text-normal my-4'>No cost EMI and flexible 6, 9, or 12 monthly plans available.</p>
            </div>
        </div>
    );
}

export default ProgramFees;