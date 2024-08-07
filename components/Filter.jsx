import React, { useState } from 'react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


const Filter = ({ subjects, grades, onFilterChange }) => {
  const [selectedSubject, setSelectedSubject] = useState('all')
  const [selectedGrade, setSelectedGrade] = useState('all')

  const handleSubjectChange = (value) => {
    setSelectedSubject(value)
    onFilterChange(value === 'all' ? '' : value, selectedGrade === 'all' ? '' : selectedGrade)
  }

  const handleGradeChange = (value) => {
    setSelectedGrade(value)
    onFilterChange(selectedSubject === 'all' ? '' : selectedSubject, value === 'all' ? '' : value)
  }

  return (
    <div className='text-center'>
      <p>Filtrera på ämne och skolform</p>
    <div className='flex flex-row space-x-4 p-4 rounded max-w-xs w-full'>
      <Select value={selectedSubject} onValueChange={handleSubjectChange}>
        <SelectTrigger className="rounded w-[180px]">
          <SelectValue>{selectedSubject === 'all' ? 'Alla ämnen' : selectedSubject}</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white text-black">
          <SelectItem value="all">Alla ämnen</SelectItem>
          {subjects.map((subject, index) => (
            <SelectItem key={index} value={subject}>{subject}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedGrade} onValueChange={handleGradeChange}>
        <SelectTrigger className="rounded w-[180px]">
          <SelectValue>{selectedGrade === 'all' ? 'Alla' : selectedGrade}</SelectValue>
        </SelectTrigger>
        <SelectContent className="bg-white text-black">
          <SelectItem value="all">Alla årskurser</SelectItem>
          {grades.map((grade, index) => (
            <SelectItem key={index} value={grade}>{grade}</SelectItem>
            ))}
        </SelectContent>
      </Select>
    </div>
    </div>
  )
}

export default Filter
