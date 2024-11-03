import { useState, useEffect } from "react"

export const useLessonFilter = (lessons) => {
  const [filteredLessons, setFilteredLessons] = useState([])
  const [selectedSubject, setSelectedSubject] = useState("")
  const [selectedGrade, setSelectedGrade] = useState("")

  useEffect(() => {
    if (lessons && Array.isArray(lessons)) {
      setFilteredLessons(lessons)
    }
  }, [lessons])

  const handleFilterChange = (subject, grade) => {
    setSelectedSubject(subject)
    setSelectedGrade(grade)
    
    // Guard clause for when lessons is undefined
    if (!lessons || !Array.isArray(lessons)) return

    let filtered = lessons
    
    if (subject) {
      filtered = filtered.filter(
        lesson => lesson.subject.toLowerCase() === subject.toLowerCase()
      )
    }
    if (grade) {
      filtered = filtered.filter(
        lesson => lesson.grade.toLowerCase() === grade.toLowerCase()
      )
    }
    setFilteredLessons(filtered)
  }

  return {
    filteredLessons: filteredLessons || [],
    handleFilterChange,
    selectedSubject,
    selectedGrade
  }
}
