import React, { useState } from 'react'

const Filter = ({ subjects, grades, onFilterChange }) => {
  const [selectedSubject, setSelectedSubject] = useState('')
  const [selectedGrade, setSelectedGrade] = useState('')

  const handleSubjectChange = (e) => {
    setSelectedSubject(e.target.value)
    onFilterChange(e.target.value, selectedGrade)
  }

  const handleGradeChange = (e) => {
    setSelectedGrade(e.target.value)
    onFilterChange(selectedSubject, e.target.value)
  }

  return (
    <div className=' flex flex-row space-x-4 p-4 rounded max-w-xs w-full'>
      <select value={selectedSubject} 
      onChange={handleSubjectChange}
      className='p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        <option value="">Alla ämnen</option>
        {subjects.map((subject, index) => (
          <option key={index} value={subject}>{subject}</option>
        ))}
      </select>

      <select value={selectedGrade} 
      onChange={handleGradeChange}
      className='p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
      >
        <option value="">Alla årskurser</option>
        {grades.map((grade, index) => (
          <option key={index} value={grade}>{grade}</option>
        ))}
      </select>
    </div>
  )
}

export default Filter


// import React, { useState } from 'react';

// const Filter = ({ subjects, grades, onFilterChange }) => {
//   const [selectedSubject, setSelectedSubject] = useState('');
//   const [selectedGrade, setSelectedGrade] = useState('');

//   const handleSubjectChange = (e) => {
//     setSelectedSubject(e.target.value);
//     onFilterChange(e.target.value, selectedGrade);
//   };

//   const handleGradeChange = (e) => {
//     setSelectedGrade(e.target.value);
//     onFilterChange(selectedSubject, e.target.value);
//   };

//   return (
//     <div className=' flex flex-row space-x-4 p-4 rounded max-w-xs w-full'>
//       <select value={selectedSubject} 
//       onChange={handleSubjectChange}
//       className='p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
//       >
//         <option value="">Alla ämnen</option>
//         {subjects.map((subject, index) => (
//           <option key={index} value={subject}>{subject}</option>
//         ))}
//       </select>

//       <select value={selectedGrade} 
//       onChange={handleGradeChange}
//       className='p-2 border rounded bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500'
//       >
//         <option value="">Alla årskurser</option>
//         {grades.map((grade, index) => (
//           <option key={index} value={grade}>{grade}</option>
//         ))}
//       </select>
//     </div>
//   );
// };

// export default Filter;
