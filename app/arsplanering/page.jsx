import React from 'react';
import Link from 'next/link';
import { subjects } from '@/constants/årsplanering';

const Grovplanering = () => {
  return (
    <div className='min-h-screen flex flex-col items-center justify-center px-4'>
      <h1 className='text-4xl font-bold text-gray-800 mb-8'>Årsplanering</h1>
      <div className='w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {subjects.map((subject) => (
          <Link key={subject.name} href={subject.path} passHref>
            <button className='w-full bg-black hover:bg-gray-600 text-white font-bold py-4 rounded-lg shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105'>
              {subject.name}
            </button>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Grovplanering;
