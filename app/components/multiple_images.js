import React from 'react';

const MultipleImages = ({images}) => {
    return (
        <div className="multiple-images max-w-7xl mx-auto my-4 flex flex-wrap flex-col lg:flex-row md:flex-row items-center px-4">
            {images.map((image, index) => (
                <img src={image} className='w-full lg:w-1/6 md:w-1/6'></img>
            ))}
        </div>
    );
}

export default MultipleImages;