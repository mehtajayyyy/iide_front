"use client";
import React, { useState } from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className={inter.className}>
        <nav className="bg-white-800 py-4 main-header">
            <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                {/* Logo */}
                <div className="flex items-center">
                <img src="/images/IIDE-Logo.svg" alt="Logo" className="h-10 mr-4" />
                
                </div>
                
                {/* Menu items */}
                <div className="hidden md:flex items-center space-x-4">
                <div className="relative">
                    <button 
                    onClick={() => setMenuOpen(!menuOpen)} 
                    className="text-black hover:text-gray-300 focus:outline-none nav-link"
                    >
                    About
                    <svg 
                        className="h-4 w-4 inline-block ml-1" 
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                    >
                        <path 
                        fillRule="evenodd" 
                        d="M10 12l-8-8 1.5-1.5L10 9.999 16.5 1 18 2.5z" 
                        clipRule="evenodd" 
                        />
                    </svg>
                    </button>
                    {/* Dropdown menu */}
                    {menuOpen && (
                    <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10">
                        <a href="#" className="block px-4 py-1 text-black-800 hover:bg-gray-200">About Us</a>
                        <a href="#" className="block px-4 py-1 text-black-800 hover:bg-gray-200">Student Life at IIDE</a>
                        <a href="#" className="block px-4 py-1 text-black-800 hover:bg-gray-200">Teachers & Mentors</a>
                        <a href="#" className="block px-4 py-1 text-black-800 hover:bg-gray-200">Testimonials</a>
                    </div>
                    )}
                </div>
                <a href="#" className="text-black hover:text-gray-300 mr-2 nav-link">Placements</a>
                <a href="#" className="text-black hover:text-gray-300 mr-2 nav-link">Hire from Us</a>
                <a href="#" className="text-black hover:text-gray-300 mr-2 nav-link">Work with Us</a>
                <a href="#" className="text-black hover:text-gray-300 mr-2 nav-link">Knowledge Portal</a>
                <a href="#" className="text-black hover:text-gray-300 mr-2 nav-link">Contact Us</a>
                </div>
                
                {/* Hamburger menu for mobile */}
                <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)} className="text-black focus:outline-none">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                    </svg>
                </button>
                </div>
            </div>
            
            {/* Dropdown menu for mobile */}
            {menuOpen && (
                <div className="md:hidden bg-white-800 px-2 py-3">
                <a href="#" className="text-black hover:text-gray-300 block py-2">About</a>
                <a href="#" className="text-black hover:text-gray-300 block py-2">Placements</a>
                <a href="#" className="text-black hover:text-gray-300 block py-2">Hire from Us</a>
                <a href="#" className="text-black hover:text-gray-300 block py-2">Work with Us</a>
                <a href="#" className="text-black hover:text-gray-300 block py-2">Knowledge Portal</a>
                <a href="#" className="text-black hover:text-gray-300 block py-2">Contact Us</a>
                </div>
            )}
        </nav>
    </div>
  );
};

export default Header;
