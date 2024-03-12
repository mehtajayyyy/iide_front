import React from 'react';

const SupersessionsCard = ({data}) => {
    return (
        <div className='w-full mr-8 mt-8 rounded-md border-t-4 bg-slate-100 border-sky-600 lg:w-1/4 md:w-1/4 flex flex-col items-center justify-center'>
            <img src={data.image} className='my-3'></img>
            <h3 className='text-center text-xl text-sky-600 font-bold my-2'>{data.name}</h3>
            <p className='mb-2 text-black text-sm px-4 text-center'>{data.designation}</p>
            <img src={data.company_logo} className='mb-6'></img>
        </div>
    );
}

export default SupersessionsCard;