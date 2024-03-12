import React from 'react';

const SectionTitle = ({title}) => {
    return (
        <div className="pb-8 max-w-7xl mx-auto px-4">
            <h2 className="text-4xl text-black font-semibold section-title">{title}</h2>
            <div className='divider'></div>
        </div>
    );
}

export default SectionTitle;