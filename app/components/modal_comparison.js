import React from 'react';

const ModalComparison = ({data}) => {
    return (
        <div className='w-full flex flex-col items-center-justify-center py-4'>
            <h3 className='text-black text-2xl font-semibold text-center'>{data.title}</h3>
            <table className='w-full my-4 border-2 border-gray-200'>
                <tbody>
                    <tr>
                        <td className='w-1/3'></td>
                        <th className='bg-sky-600 text-white text-lg py-4 w-1/3 border-r-2 border-white'>{data.sub_title[0]}</th>
                        <th className='bg-sky-600 text-white text-lg py-4 w-1/3'>{data.sub_title[1]}</th>
                    </tr>
                    {data.items.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : 'bg-white'}>
                            <td className='w-1/3 py-4 border-r border-gray-300 px-2 text-center'>{item.key}</td>
                            <td className='w-1/3 py-4 border-r border-gray-300 px-2 text-center'>{item.value_1}</td>
                            <td className='w-1/3 py-4 border-r border-gray-300 px-2 text-center'>{item.value_2}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ModalComparison;