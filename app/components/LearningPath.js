// LearningPath.js
"use client";
import React, { useState } from 'react';

const LearningPath = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleAccordion = () => {
    setIsOpen(!isOpen);
    };

  return (
    
        <div className="w-full">
            <div 
                className="border-b border-gray-400 cursor-pointer flex justify-between items-center py-4 px-6 title"
                onClick={toggleAccordion}>
                <h3 className="text-base font-normal">Induction Session for Purdue Digital Marketing</h3>
                <svg    
                className={`h-6 w-6 transform transition-transform ${isOpen ? 'rotate-180' : 'rotate-0'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24" 
                xmlns="http://www.w3.org/2000/svg"
                >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
            </div>
            {isOpen && (
                <div className="border-b border-gray-400 py-4 px-6 content">
                <p className="text-black-600 text-base">Kick start your learning journey in the Post Graduate Program in Digital Marketing, in partnership with Purdue University, and explore everything about this digital marketing program. Get started in no time with our preparatory courses.</p>
                </div>
            )}
        </div>

  );
};

export default LearningPath;
