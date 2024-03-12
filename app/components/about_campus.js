"use client";
import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ModalForm from './modal_form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function AboutCampus({data}) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row md:flex-row px-4">
            <div className="w-full lg:w-2/3 md:w-2/3 flex flex-col mt-4">
                <p className="text-black text-base font-normal p-0 m-0">{data.description}</p>
                <div className="flex flex-col lg:flex-row md:flex-row items-center my-6">
                    <div className='w-full lg:w-1/2 flex flex-col px-2'>
                        {data.items_1.map((item, index) => (
                            <div className='flex flex-row w-full items-center'><FontAwesomeIcon icon={faCheck} className='text-sky-600' style={{ fontSize: "14px" }} /> <p className='mx-2 py-2 text-base font-normal text-black'>{item}</p></div>
                        ))}
                    </div>
                    <div className='w-full lg:w-1/2 flex flex-col px-2'>
                        {data.items_2.map((item, index) => (
                             <div className='flex flex-row w-full items-center'><FontAwesomeIcon icon={faCheck} className='text-sky-600' style={{ fontSize: "14px" }} /> <p className='mx-2 py-2 text-base font-normal text-black'>{item}</p></div>
                        ))}
                    </div>
                </div>
                <button className="bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 rounded w-full lg:w-1/4 md:w-1/4 text-lg " type='button' onClick={openModal}>{data.cta_button_text}</button>
                <Modal
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    style={{
                        overlay: {
                        backgroundColor: 'rgba(0, 0, 0, 0.5)' 
                        },
                        content: {
                        width: '60%', 
                        height: '65%', 
                        margin: 'auto' 
                        }
                    }}>
                    <ModalForm></ModalForm>
                </Modal>
            </div>
            <div className="w-full lg:w-1/3 md:w-1/3 rounded-md">
                <img className="rounded-lg" src={data.image}></img>
            </div>
        </div>
    );
}
