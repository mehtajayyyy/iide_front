"use client";
import React from 'react';
import { useState } from 'react';
import ModalComparison from './modal_comparison';
import Modal from 'react-modal';

const UpskillCards = ({data, popupData}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="pb-12 max-w-7xl mx-auto px-4">
            <div className='flex w-full flex-col lg:flex-row md:flex-row items-center my-6'>
                {data.items.map((item, index) => (
                    <div className='w-full lg:w-1/2 md:w-1/2 mr-6 px-4 py-4 border-slate-400 border-2 rounded-md'>
                        <p className='rounded-full text-sm border-2 w-36 text-center border-gray-400 px-0 my-2'>{item.tag}</p>
                        <h3 className='text-black text-xl font-semibold pb-2 w-5/6'>{item.title}</h3>
                        <p className='text-black text-base font-normal p-0 m-0 pb-1'>{item.duration}</p>
                        <p className='text-black text-base font-normal p-0 m-0 pb-2'>{item.description}</p>
                    </div>
                ))}
            </div>
            <div className='flex w-full flex-col lg:flex-row md:flex-row items-center justify-center bg-slate-100 rounded-md my-6'>
                <h2 className='w-full lg:w-2/3 md:2/3 text-black text-2xl font-semibold py-2 my-4 mx-4 text-center'>{data.cta_text}</h2>
                <button className="bg-sky-600 hover:bg-sky-600 text-white font-normal py-2 rounded w-full lg:w-56 md:w-56 mx-6 text-lg check-comparison" type='button' onClick={openModal}>{data.cta_button_text}</button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    style={{
                        overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
                        },
                        content: {
                        width: '80%', 
                        height: '50%', 
                        margin: 'auto' 
                        }
                    }}>
                    <ModalComparison data={popupData}></ModalComparison>
                </Modal>
            </div>
        </div>
    );
}

export default UpskillCards;