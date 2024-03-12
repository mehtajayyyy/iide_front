import React from 'react';
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const FixedHeader = () => {
  return (
    <div className={inter.className}>
        <p className='fixed bg-sky-600 w-full py-3 text-white text-center'>
            Claim your ₹30,000 scholarship. Enroll by Mar 12, 2024 or dial 9867912656 now!
        </p>
    </div>
  );
};

export default FixedHeader;