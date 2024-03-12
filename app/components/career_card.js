import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const CareerCard = ({data}) => {
    return (
        <div className='w-full m-4 mt-8 shadow-sky-600 shadow-md p-4 rounded-md border-2 border-black lg:w-1/2 md:w-1/2'>
            <h3 className='text-black text-xl font-bold'>{data.title}</h3>
            <p className="text-black text-base font-normal my-4">{data.description}</p>
            <div className='flex flex-wrap flex-col lg:flex-row md:flex-row items-center'>
                {data.items_1.map((item, index) => (
                <div className='flex flex-row w-full items-center'><FontAwesomeIcon icon={faCheck} className='text-sky-600' style={{ fontSize: "14px" }} /> <span className='text-black text-normal w-full lg:w-1/2 md:w-1/2 my-2 mx-2'>{item}</span></div>
                ))}
                {data.items_2.map((item, index) => (
                <div className='flex flex-row w-full items-center'><FontAwesomeIcon icon={faCheck} className='text-sky-600' style={{ fontSize: "14px" }} /> <span className='text-black text-normal w-full lg:w-1/2 md:w-1/2 my-2 mx-2'>{item}</span></div>
                ))}
            </div>
        </div>
    );
}

export default CareerCard;