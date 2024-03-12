import React from 'react';
import BrochureForm from './brochure_form';

const ModalForm = () => {
    const data = {
        'title': 'Get Complete Info',
        'course_date': 'Program Commences: Mar 12, 2024'
    }
    return (
        <div className='w-full my-8 rounded-md flex flex-col lg:flex-row md:flex-row items-center justify-center'>
            <div className='w-full flex flex-col items-center justify-center'>
                <BrochureForm data={data}></BrochureForm>

            </div>
        </div>
    );
}

export default ModalForm;