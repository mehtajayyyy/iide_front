import React from 'react';

const LearningMethods = ({data}) => {
    return (
        <div className='flex flex-col mt-8 lg:flex-row md:flex-row items-center'>
            {data.map((item, index) => (
            <div className='w-full my-2 mr-8 shadow-black-600 shadow-md p-4 rounded-md lg:w-1/4 md:w-1/4'>
                <h3 className='text-black text-4xl font-bold border-b-2 pb-2 rounded-sm border-sky-600 text-sky-600 mt-2 text-center'>0{index+1}</h3>
                <h3 className='text-black text-2xl font-semibold text-sky-600 mt-2 text-center'>{item.title}</h3>
                <img src={item.image} className='my-2 m-auto'></img>
                <p className='mb-6 text-center text-black text-normal'>{item.description}</p>
            </div>
            ))}
        </div>
    );
}

export default LearningMethods;