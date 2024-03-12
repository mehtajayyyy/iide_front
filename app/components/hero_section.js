"use client";
import React from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import ModalForm from './modal_form';

const HeroSection = ({data}) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

  return (
    <section className="py-12 pt-24 bg-white-100">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="w-full lg:w-2/3 md:w-2/3 mb-8 md:mb-0 md:mr-8">
            <h1 className="text-4xl font-semibold text-black-800">{data.title}</h1>
            <p className="font-semibold text-2xl sub-title mt-4 text-sky-600">{data.sub_title}</p>
            <p className="mt-4 text-md text-black-800 font-medium mr-4 description">{data.description}</p>
            <div className="flex w-full flex-row my-4 items-center">
                <div className="md:mr-2">
                    <img src="https://iide.co/wp-content/w3-webp/uploads/2023/07/Online-Digital-Marketing-Course-Banner-Award.pngw3.webp"></img>
                </div>
                <div>
                    <p className="text-md text-black-800 font-medium mr-4 description">{data.award_text}</p>
                    <span className="mt-1 font-normal description">{data.awarded_by}</span>
                </div>
            </div>
            <p className="text-md text-red-600 font-medium mr-4 description">{data.course_date}</p>
            <button className="bg-sky-600 hover:bg-sky-600 text-white font-semibold py-2 px-6 rounded my-4 download-brochure text-lg" type='button' onClick={openModal}>{data.download_text}</button>
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
            <div className="flex flex-row w-full items-center">
                <div className="w-2/3">
                    <p className="mt-6 description">{data.certificate_text}</p>
                    <div className="flex flex-row certificates-container items-center">
                        {data.certificate_images.map((image, index) => (
                           <img src={image}></img>
                        ))}
                    </div>
                </div>
                <div className="1/3">
                    <p className="mt-6 description">{data.accredited_by}</p>
                    <div className="flex flex-row certificates-container items-center">
                        <img src={data.accredited_image}></img>
                    </div>
                </div>
            </div>
        </div>
        
        <div className="w-full md:w-1/3 lg:w-1/3 flex justify-center md:flex-row items-center">
          <img src="https://iide.co/wp-content/w3-webp/uploads/2024/01/online_digital_marketing_courses_in_India_page_banner.pngw3.webp" alt="Hero Image" className="w-full rounded-lg m-4" />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4">
        <div className="w-full shadow-md my-8 bg-slate-100 py-8 px-12 flex flex-col lg:flex-row md:flex-row items-center">
            {data.stats.map((item, index) => (
                <div className="lg:w-1/5 md:w-1/5 w-48">
                    <p className="text-lg text-black my-1 font-semibold mb-0">{item.value}</p>
                    <p className='text-black description font-normal'>{item.title}</p>
                </div>
            ))}
        </div>
       </div>
    </section>
  );
};

export default HeroSection;
