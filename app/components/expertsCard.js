import React from 'react';

const ExpertsCard = ({data}) => {
    return (
        <div className='flex flex-row items-center w-full ld:w-1/3 md:w-1/3 border-md my-4 experts_card'>
            <div className='rounded-xl bg-white px-8 py-12 border-sky-600 border border-md'>
                <img src={data.expert_image}></img>
            </div>
            <div className='flex flex-col pt-4 mx-4'>
                <h3 className='text-black text-xl font-bold mt-4'>{data.name}</h3>
                <p className='mb-2 text-black text-normal'>{data.designation}</p>
                <p className='mb-2 text-black text-normal'>{data.experience}</p>
                <hr />
                <img src={data.company_logo} className='mb-2 company_logo'></img>
            </div>
        </div>
    );
}

export default ExpertsCard;