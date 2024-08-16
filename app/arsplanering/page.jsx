import React from 'react'
import { subjects } from '@/constants/årsplanering'

const Grovplanering = () => {
    return (
        <>
                <h1 className='text-4xl font-bold text-gray-800 mb-8 text-center'>Årsplanering</h1>
            <div className='flex justify-center items-center'>
                <img 
                    src='/images/arsplanering.jpg'
                    className='w-auto h-80 object-contain'
                />
            </div>
            <div className='flex flex-col items-center justify-center px-4 mt-8'>
                <div className='w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {subjects.map((subject) => (
                        <a 
                            key={subject.name} 
                            href={subject.pdf} 
                            target="_blank" 
                            rel="noopener noreferrer">
                            <button className='w-full bg-black hover:bg-gray-800 text-white font-bold py-4 shadow-lg rounded-xl transition-transform duration-300 ease-in-out transform hover:scale-105'>
                                {subject.name}
                            </button>
                        </a>
                    ))}
                </div>
            </div>
    </>
    )
}

export default Grovplanering;