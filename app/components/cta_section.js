"use client";
import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ModalForm from './modal_form';

export default function CtaSection({data}) {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };
    return (
        <div className="flex flex-col lg:flex-row md:flex-row px-4 justify-between items-center">
            <h3 className='w-2/3 text-white text-3xl font-semibold'>Know more about the placement and career opportunities in detail</h3>
            <div className='w-1/3 m-auto flex justify-end'>
                <button className="bg-white hover:bg-white text-sky-600 font-semibold py-2 rounded w-full lg:w-2/3 md:w-2/3 text-lg " type='button' onClick={openModal}>{data.cta_button_text}</button>
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
        </div>
    );
}
