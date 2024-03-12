import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const KeyHighlights = ({data}) => {
    return (
        <div className="flex flex-col lg:flex-row md:flex-row w-full items-center">
            <div className='w-full lg:w-1/3 flex flex-col px-4'>
                {data.items_1.map((item, index) => (
                    <div className='flex flex-row w-full items-center'><FontAwesomeIcon icon={faCheck} className='text-sky-600' style={{ fontSize: "14px" }} /><p className='mx-2 py-2 text-base font-normal text-black'>{item}</p></div>
                ))}
            </div>
            <div className='w-full lg:w-1/3 flex flex-col px-4'>
                {data.items_2.map((item, index) => (
                    <div className='flex flex-row w-full items-center'><FontAwesomeIcon icon={faCheck} className='text-sky-600' style={{ fontSize: "14px" }} /><p className='mx-2 py-2 text-base font-normal text-black'>{item}</p></div>
                ))}
            </div>
            <div className='w-full lg:w-1/3 flex flex-col px-4 bg-white justify-center items-center rounded-md border py-6 border-sky-600'>
                <h3 className='text-3xl font-semibold text-black text-center text-sky-600'>{data.cta_text}</h3> 
                <p className='p-0 m-0 py-4 text-black font-semibold'>{data.cta_description}</p>
                <button className="bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 px-4 w-48 rounded book-demo text-lg" type='button'>{data.cta_button_text}</button>
            </div>
        </div>
    );
}

export default KeyHighlights;